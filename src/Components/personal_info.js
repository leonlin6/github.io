import React from 'react';

function closeInfo(){

	let x = document.getElementById("info_Pop");
	
	if(x){
		x.style.display = "none";
	}

}

const PersonalInfo = (props) => {

	function getUserPhone (){

		let findUserId = props.allUserName.find((item)=>{
			return item.id==props.currentInfo.id;
		})

		if(findUserId != undefined)
			return findUserId.phone;
		else
			return '';
	}

	function getUserName (){

		let findUserId = props.allUserName.find((item)=>{
			return item.id==props.currentInfo.id;
		})

		if(findUserId != undefined)
			return findUserId.name;
		else
			return '';
	}

	return (
		<div className="Info-Pop" id="info_Pop">
			<div className="Rectangle-15-Copy-5">
				<div className="Mission-Add-Title">個人資訊</div>
				<div className="Close-Button" onClick={()=>closeInfo()}>x</div>
			</div>
			<div className="Info-Content">
				<div className="Enter-Title-Area">
					<div className="pt">標題</div>
					<div className="Input-Box pt">{props.currentInfo.title}</div>
				</div>
				<div className="Enter-Title-Area">
					<div className="pt">姓名</div>
					<div className="Input-Box pt" >{getUserName()}</div>
				</div>
				<div className="Enter-Title-Area">
					<div className="pt">電話號碼</div>
					<div className="Input-Box pt">{getUserPhone()}</div>
				</div>
				<div className="Flex-Display">
					<div className="initial"></div>
					<div className="Info-Font-Rate Flex1">完成率</div>
					<div className="Info-Font-Rate Flex2">100%</div>
				</div>
				<hr className="Separate-Line"></hr>
				<div className="pt Accomplish-Button" onClick={()=>closeInfo()}>完成</div>
			</div>

		</div>

	);

};

export default PersonalInfo;