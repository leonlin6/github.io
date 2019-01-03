import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MissionList from './Components/mission_list';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class App extends Component {
	
	constructor(props){
		super(props);		

		this.state = { 
			isPopped: false,
			selectedVideo: null ,
			missionStorage:[],
			allUserName:[],
			currentInfo:{}
		};
		this.getUserList();
		
	}

	getMissionList(){
		fetch('https://jsonplaceholder.typicode.com/todos')
		  .then(response => response.json())
		 // .then(json => this.jsonHandler(json))	

	}
	
	getUserList(){
		fetch('https://jsonplaceholder.typicode.com/users')
		 .then(response => response.json())
		 .then(json => this.state.allUserName = json)				
	}



	render(){

		return (
			<div>
				<MissionList
					isPopped={this.state.isPopped}
					onAddClick={isPopped=>this.setState({isPopped})}
					missionNumber={this.missionNumber}
					addNewMission={missionStorage=>{this.setState({missionStorage})}}
					missionStorage={this.state.missionStorage}
					allUserName={this.state.allUserName}
					setCurrentInfo={currentInfo=>{this.setState({currentInfo})}}
					currentInfo={this.state.currentInfo}
					deleteItems={deleteItems=>{this.setState({deleteItems})}}
				/>
			</div>
		);
	}
 
}

ReactDOM.render(<App/>, document.querySelector('.mainPage'));
