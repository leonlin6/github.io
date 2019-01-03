import React from 'react';


function closeMission(){
	let missionWindow = document.getElementById("mission_Add");	
	if(missionWindow){
		missionWindow.style.display = "none";
	}
 	initValue()
}

			
function showDropDown() {
  document.getElementById("myDropdown").classList.toggle("show");  
  document.getElementById("missionInputBox").style.borderRadius="5px 5px 0px 0px";
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        document.getElementById("missionInputBox").style.borderRadius="5px";
      }
    }
  }
}


function selectUser(UserId, UseName){
	document.getElementById("missionInputBox").innerHTML = UseName;
	document.getElementById("missionInputBox").value = UserId;
}


function initValue(){
	document.getElementById("Add-Mission-Title").value = "";

	document.getElementById("missionInputBox").innerHTML = "使用者";	
	document.getElementById("missionInputBox").value = "";	
}


const MissionAdd = (props) =>{

	function addMissionToState (missionStorageArray, allUserNameList){
		let title = document.getElementById("Add-Mission-Title").value;
		let id = document.getElementById("missionInputBox").value;
		let completed = false;

		if(title == "" || id == ""){
			return missionStorageArray;
		}

		let findUserId = allUserNameList.find((item)=>{
			return item.id==id;
		})

		let storage = [title, findUserId, completed];
		missionStorageArray.push(storage);

		closeMission();		
		return missionStorageArray;
	}


	
	var dropdownContent = props.allUserName.map((item)=>{
		return(
			<a onClick={()=>selectUser(item.id, item.name)}>{item.name}</a>
			)
	});	

	return(
		<div className="Mission-Add-Pop" id="mission_Add">
			<div className="Rectangle-15-Copy-5">
				<div className="Mission-Add-Title">新增任務</div>
				<div className="Close-Button" onClick={()=>closeMission()}>x</div>
			</div>
			<div className="Rectangle-26-Copy-2">
				<div className="Progress-Bar"> 
					<div className="Rectangle-4-Copy-2"></div>
					<div className="Rectangle-4-Copy-3"></div>
				</div>
				<div className="Select-User-Area">
					<div className="pt">選擇使用者</div>
					<div>
						<div id="missionInputBox" className="Input-Box pt dropbtn" onClick={()=>showDropDown()} >使用者</div>
						<div className="fas fa-caret-down Caret-Down-Icon dropbtn" onClick={()=>showDropDown()}></div>
						<div id="myDropdown" className="dropdown-content">
							{dropdownContent}
						</div>
					</div>		
				</div>
				<div className="Enter-Title-Area">
					<div className="pt">標題</div>
					<div className="Input-Box pt"  >
						<input id="Add-Mission-Title" className="Add-Mission-Title" placeholder="輸入標題..." maxLength="20"></input>
					</div>
				</div>
				<hr className="Separate-Line"></hr>
				<div className="pt Accomplish-Button" onClick={()=>{props.addNewMission(addMissionToState(props.missionStorage, props.allUserName)); }}>完成</div>

			</div>

		</div>

	);
}


export default MissionAdd;