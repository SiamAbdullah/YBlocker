// --------------------------------------------------------------------------------------------------------------------
// <copyright file="ContentScript.js.cs" company="Microsoft">
//     Copyright (c) Microsoft. All rights reserved.
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

var popUpHtmlId = ["video-annotations", "video-ads"];
var url = document.location.href;

// make sure the request is for youtube
if(!!url && url.indexOf("youtube.com/watch?") > 0){
   var index= 0;
   for(; index < popUpHtmlId.length; index++){
       var annotationsElement = document.getElementsByClassName(popUpHtmlId[index]);
       if(!!annotationsElement && annotationsElement.length > 0){
               annotationsElement.remove();
       }
   }

   console.log("Removed pop up ads by YBlocker !!!! :D. ");
}
