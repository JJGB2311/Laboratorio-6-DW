	function burbuja(miArray)
	{
		for(var i=1;i<miArray.length;i++)
		{
			for(var j=0;j<(miArray.length-i);j++)
			{
				if(miArray[j]>miArray[j+1])
				{
					k=miArray[j+1];
					miArray[j+1]=miArray[j];
					miArray[j]=k;
				}
			}
		}
		return miArray;
	}
 
	miArray=Array(5,9,4,7,3,8,2,1,6);
 
	document.write("Valores Iniciales<br>");
	for(var i=0;i<miArray.length;i++)
	{
		document.write(miArray[i]+" ");
	}
 
	arrayB=burbuja(miArray);
	document.write("<br> ");
	document.body.style.fontSize="24px"

     
	document.write("Valores ordenados<br>");
	for(i=0;i<arrayB.length;i++)
	{


	for(i=0;i<arrayB.length;i++)
	{

		document.write("<div style="+'"'+"width:"+ arrayB[i]*10 + "px; height:50px;"+'"'+">" +arrayB[i]+"</div> "+ " ") ;
	}
	}
	