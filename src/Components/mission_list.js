import React from 'react'
import MissionAdd from './mission_add';
import MissionListItems from './mission_list_items';
import PersonalInfo from './personal_info';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus  } from '@fortawesome/free-solid-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faPlus);



	function addMissionShow(){
		//document.getElementById("info_Pop").style.display = "grid";
		document.getElementById("mission_Add").style.display = "grid";
		
	}

	function personalInfoShow(){
		document.getElementById("info_Pop").style.display = "grid";
		
	}

	const MissionList = (props) => {	

		const getUserName = (userId) => {
 			const userName = props.allUserName.find((item)=>{
 				return item.id == userId;
 			});
 			return userName.name;
		}

	 	const copyMissionItems = props.missionStorage.map((item)=>{

	 		if(typeof item != "undefined" ){
		 		return(			
						<MissionListItems
							infoIcon={personalInfoShow} 
							title={item[0]}	
							id={item[1].id}	
							setCurrentInfo={props.setCurrentInfo}
							setMissionAccomplish={props.setMissionAccomplish}	
							deleteItems={props.addNewMission}
							userName={getUserName(item[1].id)}	
							missionStorage={props.missionStorage}	
						/>	
		 			);
	 		}else{
	 			return "";
	 		}

		});		


	 return(
		<div className="Base">
			<div className="Todo-List">
				<div className = "Add-Mission-Item Float-Left" onClick={()=>{props.onAddClick(!props.isPopped); addMissionShow()}}>
					<FontAwesomeIcon icon="plus" size="3x" className = "Combined-Shape-Copy-2"/>
				</div>
				<div>{copyMissionItems}</div>
			</div>
			<MissionAdd
				infoIcon={personalInfoShow} 
				missionNumber={props.missionNumber}
				addNewMission={props.addNewMission}
				missionStorage={props.missionStorage}
				allUserName={props.allUserName}
			/>	
			<PersonalInfo 
				currentInfo={props.currentInfo}
				allUserName={props.allUserName}
			/>		
		</div>
	);
}
 export default MissionList;




