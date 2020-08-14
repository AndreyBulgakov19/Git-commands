﻿// (С) SCD Andrey Bulgakov 2020 (01)#include "AILib.jsx" try {	if (app.documents.length > 0 ) 	{		doc = app.activeDocument;		if(doc.layers.length == 2) // должно быть 2 слоя		{			var colorGray = new CMYKColor();			colorGray.black = 49.8;					var strCad = 0.5;						var src = doc.layers[0];			var trg = doc.layers[1];						gLabelItems = trg.groupItems.add();			for ( var i = 0; i < src.pathItems.length; i++)			{				if (CMYKCmp(src.pathItems[i].strokeColor, colorGray))				{					dupSrc = src.pathItems[i].duplicate();					//dupSrc.strokeColor = cRezSpotColor;					dupSrc.strokeWidth = strCad;										dupSrc.BlendingMode = BlendModes.DIFFERENCE;										dupSrc.moveToBeginning(gLabelItems);				} 			}						if(gLabelItems.pathItems.length == 0) gLabelItems.remove();		}		else throw new Error('Ошибка! В документе должно быть 2 слоя'); // 	}	else { throw new Error('Нет открытых документов!'); }}catch(e) {	alert( e.message, "Script Alert", true);}