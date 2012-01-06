/*
 *
 * D-Elements JavaScript Library v1.0
 * Copyright 2011, Neeraj Khandelwal
 * Obtain GPL license
 *
 * Copyright 2011, Neeraj Khandelwal
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Fri Jan 6 14:18:48 2011
*/

(function(core) {

	var elementList = null;
    function $( selector ) {
		if(selector[0] == '#')
		{
			var classname = selector.replace('#','');
			elementList = document.getElementsByClassName(classname);
		}
		//class selector .className
		else if(selector[0] == '.')
		{
			var id = selector.replace('.','');
			elementList = Array(document.getElementById(id));
		}
		//tag selector like p, div
		else
		{
			var tag = selector;
			elementList = document.getElementsByTagName(tag);
		}
        return this;
	}
    $.prototype.addelement = function(element, attributes, data) {
        var e = document.createElement(element);
		if(attributes != 'undefined' && attributes != 'xml')
		{
			for(att in attributes)
			{
				if( (typeof(att) == 'string') && (typeof(attributes[att]) == 'string') && att != '' && attributes[att] != '')
				{
					e.setAttribute(att, attributes[att]);
				}
				else
				{
					console.error('Type error: Should be string.');
					break;
				}
			}
		}
		else
		{
			console.error('Defination error: Incorrect defination.');
		}
		if(typeof(data) == "string" || data == null)
		{
			if(data != null)
			e.innerHTML = data;
		}
		else
		{
			console.error('Type error: Should be string.');
		}
		if(elementList.length > 0)
		{
			for(i = 0; i < elementList.length; i++)
			{
				elementList[i].appendChild(e.cloneNode(true));
			}
		}
		else
		{
			console.error('Looking error: Unable to find element.');
		}
		
    };
	
    core.$ = function( value ) {
        return new $( value );
    }

})( this );
