import React from 'react';
import PersonalInfo from './personal_info';

function changeBoderColor(id){
	document.getElementById(id).style.border = "2px solid #50e3c2";
	document.getElementById(id).style.color = "#50e3c2";
	document.getElementById(id).innerHTML = "任務完成";
}


const MissionListItems = (props) => {

	const deleteItem = (itemId) => {
		if(typeof itemId != "undefined" ){
			var arrayMark;

			var newItems = props.missionStorage.map((item, index)=>{
				if(item[1].id == itemId){
					arrayMark = index;
					return false; 
				}else{
					return item;
				}

			});
			newItems.splice(arrayMark, 1);
			return newItems;
		}
		return {};
		
	}

	return (
		<div className="Mission-Items-Margin Float-Left">
			<div className = "Mission-Items">
				<div>
					<input className="-copy Mission-Items-Name" placeholder="任務名稱" type="text" value={props.title}></input>
					<div className="Sub-Description">(雙擊進行編輯)</div>
				</div>
				<div id={props.id} className="Mission-Accomplish-Button pt" onClick={()=>{changeBoderColor(props.id)}}>點擊完成</div>
			</div>
			<div className="BottomInfo"> 
				
				<i className="far fa-star Star-Icon"></i>
				<div className="userName Font-Type2">{props.userName}</div>
				<i className="fas fa-info-circle Info-Icon" onClick={()=>{props.infoIcon();props.setCurrentInfo({id:props.id, title:props.title})}}></i>
				<i className="fas fa-trash-alt TrashCan-Icon" onClick={()=>{props.deleteItems(deleteItem(props.id))}}></i>

			</div>					
		</div>
	);
}


export default MissionListItems;