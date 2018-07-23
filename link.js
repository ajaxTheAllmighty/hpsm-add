function testLink(id){
	var file = new SCFile('device');
	file['type'] = 'pc';
	var sccm = new SCFile('sccmHardware');
	var query = sccm.doSelect('ResourceID='+id+'');
		if(query = RC_SUCCESS){
			file['serial.no.'] = sccm['SerialNumber0'];
			file['vendor'] = sccm['Manufacturer00'];
			file['model'] = sccm['Model00'];
			file['ci.name'] = sccm['Name00'];
			file['users'] = sccm['UserName00'];
			// file['processors.model'] = sccm['ProcName00'];
			// file['processors.cores'] = sccm['NumberOfCores00'];
			// file['processors.proc'] = sccm['NumberOfLogicalProcessors00'];
			file['ip.address'] = sccm['IPAddress00'];
			file['mac.address'] = sccm['MACAddress00'];
			//file['hdd.capacity'] = sccm['Size00'];
		}
		return file;
}
//'SerialNumber0','ResourceID',	'Manufacturer00',	'Model00',	'Name00', 	'UserName00',	'ProcName00',      	'NumberOfCores00', 	'NumberOfLogicalProcessors00',	'IPAddress00',	'MACAddress00',	'Size00'
//'serial.no.',   				'vendor',    	  	'model',  	'ci.name',	'users',     	'processors.model',	'processors.cores',	'processors.proc',            	'ip.address', 	'mac.address', 	'hdd.capacity'
