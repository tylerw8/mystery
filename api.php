<?php

if(isset($_REQUEST['cat']))
{//check to be sure data has been transmitted via GET or POST
	switch($_REQUEST['cat'])
	{//determine contents of 'cat'
		case "rating":
			include('data/ms3000ratings.js'); //"rate" orders by ratings
			break;
		default:
			include('data/mystery_3000.js'); //default orders by season
	}
}else{//if not data sent, inform calling application
	echo "Incorrect parameter sent";
}
