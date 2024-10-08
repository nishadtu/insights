import React, { useEffect, useState, useRef } from "react";
import "css/Video.css";
import { useLocation, useNavigate } from 'react-router-dom';
import Webcam from "react-webcam";
import recordBtn from 'images/recordBtn.png';
import stopBtn from 'images/stopBtn.png';
import retake from 'images/retake.png';
import playBtn from 'images/playBtn.png';
import upload from 'images/upload.png';
import UserDataService from 'services/services'
import routeNames from "routes/routeNames";
import MessageModal from "components/modals/MessageModal";



const videoConstraints = { aspectRatio: 1, facingMode: { exact: "environment" }, width: window.innerWidth, height: window.innerWidth, screenshotQuality: 0.5 };
// const audioConstraints = { suppressLocalAudioPlayback: true, noiseSuppression: true, echoCancellation: true, };

const RecordVideo = (props) => {
	const webcamRef = React.useRef(null);
	const mediaRecorderRef = React.useRef(null);
	const [capturing, setCapturing] = React.useState(false);
	const [recordedChunks, setRecordedChunks] = React.useState([]);
	const isInitialMount = React.useRef(true);
	const [showCamera, setShowCamera] = React.useState(true);
	const [showPreview, setshowPreview] = React.useState(false);
	const vidRef = useRef(null);
	const locationUrl = useLocation();
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [score, setScore] = useState('');
	const [unique_id, setUniqueId] = useState('');
	const [timer, setTimer] = useState(0); // 25 minutes
	const [start, setStart] = useState(false);
	const firstStart = useRef(true);
	const tick = useRef();

	if (timer >= 16) {
		setTimer(0);
		setStart(false);
		mediaRecorderRef.current.stop();
		setCapturing(false);
		setShowCamera(false);
		setshowPreview(true);
		console.log("mediaRecorderRef.current.state", mediaRecorderRef.current.state);  // "inactive"
	}

	useEffect(() => {
		document.body.className = "overflow-hidden"
		if (locationUrl.state == null) { navigate(routeNames.video); }
		if (locationUrl.state) {
			getUser(locationUrl.state.unique_id);
		}
	}, [locationUrl, navigate]);

	const getUser = async (id) => {
		const docSnap = await UserDataService.getUser(id);
		if (docSnap.data()) {
			setEmail(docSnap.data().email);
			setUniqueId(docSnap.data().unique_id);
			setScore(docSnap.data().score);
		}
	};



	const handleDownload = React.useCallback(() => {
		if (recordedChunks.length) {
			const blob = new Blob(recordedChunks, types);
			const url = URL.createObjectURL(blob);
			const video = document.getElementById("video-replay");
			video.src = url;
		}
	}, [recordedChunks]);



	useEffect(() => {
		if (firstStart.current) { firstStart.current = !firstStart.current; return; }
		console.log(start);
		if (start) {
			tick.current = setInterval(() => { setTimer((timer) => timer + 1); }, 1000);
		} else { clearInterval(tick.current); }
		return () => clearInterval(tick.current);
	}, [start]);

	const [modalData, setModalData] = useState({ error: false, text: "", header: "", modalWait: "", callback: undefined });
	const [modalIsOpen, setModalIsOpen] = React.useState(false);
	const handleModalMessage = (message, isError, modaltext, cb) => {
		setModalData({
			error: isError,
			text: message,
			header: isError ? "Sorry" : "Great",
			modalWait: modaltext,
			callback: cb,
		});
		setModalIsOpen(true);
	};
	const handleCloseModal = () => {
		setModalIsOpen(false);
		setTimeout(() => { navigate(routeNames.video, { state: {} }); }, 10000);
	}



	if (MediaRecorder.isTypeSupported('video/webm; codecs=vp9')) {
		var options = { mimeType: 'video/webm; codecs=vp9' };
		var types = { type: "video/webm" };
		var blobType = "webm";
	} else if (MediaRecorder.isTypeSupported('video/webm')) {
		options = { mimeType: 'video/webm' };
		types = { type: "video/webm" };
		blobType = "webm";
	} else if (MediaRecorder.isTypeSupported('video/mp4')) {
		options = { mimeType: 'video/mp4', VideoBitsPerSecond: 500000};
		types = { type: "video/mp4" }
		blobType = "mp4";
	} else {
		console.error("no suitable mimetype found for this device");
	}
	// const mediaRecorder = new MediaRecorder(stream, options);

	useEffect(() => {
		if (isInitialMount.current) { isInitialMount.current = false; } else { if (!capturing) { handleDownload(); } }
	}, [recordedChunks, capturing, handleDownload]);


	const handleStartCaptureClick = React.useCallback(() => {
		setCapturing(true);
		setRecordedChunks([]);
		setTimer(0);
		setStart(true);
		mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, options);
		mediaRecorderRef.current.addEventListener(
			"dataavailable",
			handleDataAvailable
		);
		mediaRecorderRef.current.start();
		console.log("mediaRecorderRef.current.state", mediaRecorderRef.current.state);  // "recording"
	}, [webcamRef, setCapturing, mediaRecorderRef]);

	const handleDataAvailable = React.useCallback(
		({ data }) => {
			if (data.size > 0) { setRecordedChunks((prev) => prev.concat(data)); }
		},
		[setRecordedChunks]
	);

	const handleStopCaptureClick = React.useCallback(() => {
		setTimer(0);
		setStart(false);
		mediaRecorderRef.current.stop();
		setCapturing(false);
		setShowCamera(false);
		setshowPreview(true);
		console.log("mediaRecorderRef.current.state", mediaRecorderRef.current.state);  // "recording stop"
	}, [mediaRecorderRef, setCapturing]);



	const handlePlayVideo = () => {
		setTimer(0);
		vidRef.current.play();
		setStart(true);
	}

	const handleVideoEnd = () => {
		setTimer(0);
		setStart(false);
	}

	const handleretake = () => {
		setTimer(0);
		setStart(false);
		setshowPreview(false);
		setShowCamera(true);
	}

	const handleSave = React.useCallback(() => {
		if (recordedChunks.length) {
			handleModalMessage("Thanks for playing. Your video has been submitted and you will receive a link via email soon", false);
			const blob = new Blob(recordedChunks, types);
			const formData = new FormData();
			var file = new File([blob], blobType);
			formData.append("file", file);
			formData.append("unique_id", unique_id);
			formData.append("score", score);
			formData.append("email", email);
			console.log(formData);
			UserDataService.UploadVideo(formData, unique_id, score);
			setTimeout(() => {
				navigate(routeNames.video, { state: {} });
			}, 2000);
		}
	}, [recordedChunks]);

	const dispSecondsAsMins = (seconds) => {
		console.log("seconds " + seconds);
		const mins = Math.floor(seconds / 60);
		const seconds_ = seconds % 60;
		return (mins == 0 ? "00" : mins.toString()) + ":" + (seconds_ == 0 ? "00" : seconds_.toString().padStart(2, '0'));
		// eslint-disable-next-line
	};

	return (
		<div>

			{showCamera && (
				<Webcam audio={false} muted={true} ref={webcamRef}
					videoConstraints={videoConstraints}
					minScreenshotHeight={window.innerWidth}
					minScreenshotWidth={window.innerWidth}
					className="videoStyles" style={{ height: window.innerWidth, width: window.innerWidth }} />
			)}

			{showPreview && (
				<>
					<video id="video-replay" ref={vidRef} className="videoStyles_video" onEnded={handleVideoEnd} style={{ height: window.innerWidth, width: window.innerWidth }}></video>
					<div className="previewControls" >
						<img src={retake} id="retakeBtn" alt="Retake Video" title="Retake Video" className="retakeBtn" onClick={handleretake} />
						<img src={playBtn} id="playBtn" alt="Play Video" className="playBtn" onClick={handlePlayVideo} />
						<img src={upload} id="uploadBtn" alt="Upload Video" className="uploadBtn" onClick={handleSave} />
					</div>
				</>
			)}

			{capturing ? (
				<img src={stopBtn} id="stopBtn" alt="Record Video" className="recordBtn" onClick={handleStopCaptureClick} />
			) : (
				<div>
					{showCamera && (
						<img src={recordBtn} id="startBtn" alt="Record Video" className="recordBtn" onClick={handleStartCaptureClick} />
					)}
				</div>
			)}

			<div className="timerDiv"><p className="timer">{dispSecondsAsMins(timer)}</p></div>
			<MessageModal isOpen={modalIsOpen} handleClose={handleCloseModal} data={modalData} />
		</div>
	);
};
export default RecordVideo;
