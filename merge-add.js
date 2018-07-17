//'SerialNumber0','ResourceID',	'Manufacturer00',	'Model00',	'Name00', 	'UserName00',	'ProcName00',      	'NumberOfCores00', 	'NumberOfLogicalProcessors00',	'IPAddress00',	'MACAddress00',	'Size00'
//'serial.no.',   				'vendor',    	  	'model',  	'ci.name',	'users',     	'processors.model',	'processors.cores',	'processors.proc',            	'ip.address', 	'mac.address', 	'hdd.capacity'
  var sccm = new SCFile('sccmHardware');
  var device = new SCFile('device');
  var joinpc = new SCFile('joinpc');
 // var data = [];
  var sQuery,dQuery,joinQuery;
  //var cnt;
  	sQuery = sccm.doSelect('true');
	dQuery = device.doSelect('true');
	//joinQuery = joinpc.doSelect('true');
	do{
		if(!(sccm['SerialNumber0']==device['serial.no.'])){
			device['serial.no.'] = sccm['SerialNumber0'];
			device['vendor'] = sccm['Manufacturer00'];
			device['model'] = sccm['Model00'];
			device['ci.name'] = sccm['Name00'];
			device['users'] = sccm['UserName00'];
			device['ip.address'] = sccm['IPAddress00'];
			device['mac.address'] = sccm['MACAddress00'];
			joinpc['processors.model'] = sccm['ProcName00'];
			joinpc['processors.cores'] = sccm['NumberOfCores00'];
			joinpc['processors.proc'] = sccm['NumberOfLogicalProcessors00'];
			joinpc['hdd.capacity'] = sccm['Size00'];
			joinpc['logical.name'] = sccm['Name00'];
				dQuery = device.doInsert();
				joinQuery = joinpc.doInsert();
				if(dQuery == RC_SUCCESS && joinQuery == RC_SUCCESS){
					print('insert ok');
				}
				//device = null
		}
	}while(sccm.getNext == RC_SUCCESS && device.getNext == RC_SUCCESS && joinpc.getNext == RC_SUCCESS)
