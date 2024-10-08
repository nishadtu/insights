import React, { useState, useEffect } from "react";
import { Grid, Paper, RadioGroup } from "@mui/material";
import HeaderQuiz from "components/headers/HeaderQuiz";
import QuizBox from "components/boxes/QuizBox";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import UserDataService from 'services/services';
import correctIcon from 'images/correct.png';
import wrongIcon from 'images/wrong.png';

const CheckBoxColor = (theme) => ({ color: '#FFF' });

const QuizForm = ({ handleModalMessage, nextQuestion, handleModalResult }) => {
	const [quizScore, setQuizScore] = React.useState(0);
	const [answer, setAnswer] = useState("");

	useEffect(() => {
		getUser();
		console.log(quizScore);
		console.log(nextQuestion);
		// eslint-disable-next-line
	}, [answer]);

	const wrongAnswer = (value) => {
		handleModalMessage("You have selected the wrong answer", true, "Touch the screen for next question", value);
	}

	const correctAnswer = (value) => {
		handleModalMessage("You have selected the correct answer", false, "Touch the screen for next question", value);
		setQuizScore(quizScore + 1);
	}

	const getUser = () => {
		if (answer) {
			if (nextQuestion === "1") { if (answer === 'L1P2') { correctAnswer("2") } else { wrongAnswer("2") } }
			if (nextQuestion === "2") { if (answer === 'L2P4') { correctAnswer("3") } else { wrongAnswer("3") } }
			if (nextQuestion === "3") { if (answer === 'L3P3') { correctAnswer("4") } else { wrongAnswer("4") } }
			if (nextQuestion === "4") { if (answer === 'L4P1') { correctAnswer("5") } else { wrongAnswer("5") } }
			if (nextQuestion === "5") { if (answer === 'L5P2') { correctAnswer("6") } else { wrongAnswer("6") } }
			if (nextQuestion === "6") { if (answer === 'L6P3') { correctAnswer("7") } else { wrongAnswer("7") } }
			if (nextQuestion === "7") {
				if (answer === 'L7P3') {
					setQuizScore(quizScore + 1);
					quizScore === 0 ? handleModalResult((quizScore + 1) + ' correct answer', false, "Touch the screen for next user") : handleModalResult((quizScore + 1) + ' correct answers', false, "Touch the screen for next user");
				} else {
					if (quizScore === 0) {
						handleModalResult(quizScore + ' correct answers', true, "Touch the screen for next user")
					} else if (quizScore === 1) {
						handleModalResult(quizScore + ' correct answer', false, "Touch the screen for next user")
					} else {
						handleModalResult(quizScore + ' correct answer', false, "Touch the screen for next user")
					}
				}
			}
		}
	};

	const paperStyle = (theme) => ({
		margin: 'auto',
		flexGrow: 1,
		boxShadow: 'none',
		marginTop: '5px',
		background: 'transparent',
	});

	const quizGrid = (theme) => ({
		paddingLeft : '8%',
		marginTop : '2vh',
	});

	return (
		<>
			<HeaderQuiz text="Quiz" title="Quiz | Insights Admin Dashboard" question={nextQuestion} />
			<Paper sx={paperStyle} 	>
				<form method="post" className="" id="sentForm">
					<Grid container spacing={2} sx={quizGrid} justify="flex-end" alignItems="flex-end">
						<Grid item xs={9} sm={6} >
							{nextQuestion === "1" &&
								<RadioGroup name="question1">
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="Tiger Woods" value='L1P1' labelStyle={{ color: answer === "L1P1" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L1P1" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={wrongIcon} />
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="Sergio Garcia" value='L1P2' labelStyle={{ color: answer === "L1P2" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L1P2" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={correctIcon} />
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="Phil Mickelson" value='L1P3' labelStyle={{ color: answer === "L1P3" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L1P3" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={wrongIcon} />
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="Ernie Els" value='L1P4' labelStyle={{ color: answer === "L1P4" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L1P4" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={wrongIcon} />
								</RadioGroup>
							}
							{nextQuestion === "2" &&
								<RadioGroup name="question2">
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="2004" value='L2P1' labelStyle={{ color: answer === "L2P1" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L2P1" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={wrongIcon} />
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="2006" value='L2P2' labelStyle={{ color: answer === "L2P2" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L2P2" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={wrongIcon} />
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="2007" value='L2P3' labelStyle={{ color: answer === "L2P3" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L2P3" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={wrongIcon} />
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="2009" value='L2P4' labelStyle={{ color: answer === "L2P4" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L2P4" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={correctIcon} />
								</RadioGroup>
							}
							{nextQuestion === "3" &&
								<RadioGroup name="question3">
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="Beijing 2008" value='L3P1' labelStyle={{ color: answer === "L3P1" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L3P1" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={wrongIcon} />
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="London 2012" value='L3P2' labelStyle={{ color: answer === "L3P2" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L3P2" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={wrongIcon} />
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="Rio 2016" value='L3P3' labelStyle={{ color: answer === "L3P3" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L3P3" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={correctIcon} />
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="Tokyo 2020" value='L3P4' labelStyle={{ color: answer === "L3P4" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L3P4" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={wrongIcon} />
								</RadioGroup>
							}
							{nextQuestion === "4" &&
								<RadioGroup name="question4">
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="Woburn Golf Club, Buckinghamshire" value='L4P1' labelStyle={{ color: answer === "L4P1" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L4P1" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={correctIcon} />
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="The Belfry, Sutton Coldfield" value='L4P2' labelStyle={{ color: answer === "L4P2" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L4P2" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={wrongIcon} />
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="Wenthworth Club, Surrey" value='L4P3' labelStyle={{ color: answer === "L4P3" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L4P3" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={wrongIcon} />
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="Jumeirah Golf Estates, Dubai" value='L4P4' labelStyle={{ color: answer === "L4P4" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L4P4" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={wrongIcon} />
								</RadioGroup>
							}
							{nextQuestion === "5" &&
								<RadioGroup name="question5">
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="Adrian Meronk" value='L5P1' labelStyle={{ color: answer === "L5P1" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L5P1" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={wrongIcon} />
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="Vincent Norman" value='L5P2' labelStyle={{ color: answer === "L5P2" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L5P2" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={correctIcon} />
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="Jon Rahm" value='L5P3' labelStyle={{ color: answer === "L5P3" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L5P3" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={wrongIcon} />
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="Shane Lowry" value='L5P4' labelStyle={{ color: answer === "L5P4" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L5P4" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={wrongIcon} />
								</RadioGroup>
							}
							{nextQuestion === "6" &&
								<RadioGroup name="question6">
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="Carton House" value='L6P1' labelStyle={{ color: answer === "L6P1" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L6P1" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={wrongIcon} />
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="Lahinch Golf Club" value='L6P2' labelStyle={{ color: answer === "L6P2" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L6P2" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={wrongIcon} />
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="The K Club" value='L6P3' labelStyle={{ color: answer === "L6P3" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L6P3" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={correctIcon} />
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="Mount Juliet" value='L6P4' labelStyle={{ color: answer === "L6P4" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L6P4" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={wrongIcon} />
								</RadioGroup>
							}
							{nextQuestion === "7" &&
								<RadioGroup name="question7">
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="12" value='L7P1' labelStyle={{ color: answer === "L7P1" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L7P1" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={wrongIcon} />
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="18" value='L7P2' labelStyle={{ color: answer === "L7P2" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L7P2" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={wrongIcon} />
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="24" value='L7P3' labelStyle={{ color: answer === "L7P3" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L7P3" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={correctIcon} />
									<QuizBox onChange={event => setAnswer(event.target.value)} labelText="30" value='L7P4' labelStyle={{ color: answer === "L7P4" ? "#FFF" : "#000" }} FormStyle={{ background: answer === "L7P4" ? "linear-gradient(#28abdb, #236cb5)" : "#FFF" }} checkedIcon={wrongIcon} />
								</RadioGroup>
							}
						</Grid>
					</Grid>
				</form>
			</Paper>
		</>
	);
};

export default QuizForm;
