
/*!
 * Compressor.js v1.0.6
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2019-11-23T04:43:12.442Z
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Compressor=t()}(this,function(){"use strict";function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function t(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function i(i){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?t(Object(n),!0).forEach(function(e){var t,r,a;t=i,a=n[r=e],r in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach(function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(n,e))})}return i}var e,L=(function(e){var t,i,u,f,h,d,n;"undefined"!=typeof window&&(i=(t=window).HTMLCanvasElement&&t.HTMLCanvasElement.prototype,u=t.Blob&&function(){try{return Boolean(new Blob)}catch(e){return!1}}(),f=u&&t.Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(e){return!1}}(),h=t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder||t.MSBlobBuilder,d=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,n=(u||h)&&t.atob&&t.ArrayBuffer&&t.Uint8Array&&function(e){var t,r,a,i,n,o,l,s,c;if(!(t=e.match(d)))throw new Error("invalid data URI");for(r=t[2]?t[1]:"text/plain"+(t[3]||";charset=US-ASCII"),a=!!t[4],i=e.slice(t[0].length),n=a?atob(i):decodeURIComponent(i),o=new ArrayBuffer(n.length),l=new Uint8Array(o),s=0;s<n.length;s+=1)l[s]=n.charCodeAt(s);return u?new Blob([f?l:o],{type:r}):((c=new h).append(o),c.getBlob(r))},t.HTMLCanvasElement&&!i.toBlob&&(i.mozGetAsFile?i.toBlob=function(e,t,r){var a=this;setTimeout(function(){r&&i.toDataURL&&n?e(n(a.toDataURL(t,r))):e(a.mozGetAsFile("blob",t))})}:i.toDataURL&&n&&(i.toBlob=function(e,t,r){var a=this;setTimeout(function(){e(n(a.toDataURL(t,r)))})})),e.exports?e.exports=n:t.dataURLtoBlob=n)}(e={exports:{}},e.exports),e.exports),n={strict:!0,checkOrientation:!0,maxWidth:1/0,maxHeight:1/0,minWidth:0,minHeight:0,width:void 0,height:void 0,quality:.8,mimeType:"auto",convertSize:5e6,beforeDraw:null,drew:null,success:null,error:null},o="undefined"!=typeof window&&void 0!==window.document?window:{},c=Array.prototype.slice;var r=/^image\/.+$/;function P(e){return r.test(e)}var b=String.fromCharCode;var u=o.btoa;function f(e){var t,r=new DataView(e);try{var a,i,n;if(255===r.getUint8(0)&&216===r.getUint8(1))for(var o=r.byteLength,l=2;l+1<o;){if(255===r.getUint8(l)&&225===r.getUint8(l+1)){i=l;break}l+=1}if(i){var s=i+10;if("Exif"===function(e,t,r){var a,i="";for(r+=t,a=t;a<r;a+=1)i+=b(e.getUint8(a));return i}(r,i+4,4)){var c=r.getUint16(s);if(((a=18761===c)||19789===c)&&42===r.getUint16(s+2,a)){var u=r.getUint32(s+4,a);8<=u&&(n=s+u)}}}if(n){var f,h,d=r.getUint16(n,a);for(h=0;h<d;h+=1)if(f=n+12*h+2,274===r.getUint16(f,a)){f+=8,t=r.getUint16(f,a),r.setUint16(f,1,a);break}}}catch(e){t=1}return t}var l=/\.\d*(?:0|9){12}\d*$/;function C(e,t){var r=1<arguments.length&&void 0!==t?t:1e11;return l.test(e)?Math.round(e*r)/r:e}var h=o.ArrayBuffer,d=o.FileReader,m=o.URL||o.webkitURL,p=/\.\w+$/,g=o.Compressor;return function(){function r(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),this.file=e,this.image=new Image,this.options=i({},n,{},t),this.aborted=!1,this.result=null,this.init()}return function(e,t,r){t&&a(e.prototype,t),r&&a(e,r)}(r,[{key:"init",value:function(){var i=this,n=this.file,e=this.options;if(function(e){return"undefined"!=typeof Blob&&(e instanceof Blob||"[object Blob]"===Object.prototype.toString.call(e))}(n)){var o=n.type;if(P(o))if(m&&d)if(h||(e.checkOrientation=!1),m&&!e.checkOrientation)this.load({url:m.createObjectURL(n)});else{var t=new d,l=e.checkOrientation&&"image/jpeg"===o;(this.reader=t).onload=function(e){var t=e.target.result,r={};if(l){var a=f(t);1<a||!m?(r.url=function(e,t){for(var r,a=[],i=new Uint8Array(e);0<i.length;)a.push(b.apply(null,(r=i.subarray(0,8192),Array.from?Array.from(r):c.call(r)))),i=i.subarray(8192);return"data:".concat(t,";base64,").concat(u(a.join("")))}(t,o),1<a&&s(r,function(e){var t=0,r=1,a=1;switch(e){case 2:r=-1;break;case 3:t=-180;break;case 4:a=-1;break;case 5:t=90,a=-1;break;case 6:t=90;break;case 7:t=90,r=-1;break;case 8:t=-90}return{rotate:t,scaleX:r,scaleY:a}}(a))):r.url=m.createObjectURL(n)}else r.url=t;i.load(r)},t.onabort=function(){i.fail(new Error("Aborted to read the image with FileReader."))},t.onerror=function(){i.fail(new Error("Failed to read the image with FileReader."))},t.onloadend=function(){i.reader=null},l?t.readAsArrayBuffer(n):t.readAsDataURL(n)}else this.fail(new Error("The current browser does not support image compression."));else this.fail(new Error("The first argument must be an image File or Blob object."))}else this.fail(new Error("The first argument must be a File or Blob object."))}},{key:"load",value:function(e){var t=this,r=this.file,a=this.image;a.onload=function(){t.draw(i({},e,{naturalWidth:a.naturalWidth,naturalHeight:a.naturalHeight}))},a.onabort=function(){t.fail(new Error("Aborted to load the image."))},a.onerror=function(){t.fail(new Error("Failed to load the image."))},o.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(o.navigator.userAgent)&&(a.crossOrigin="anonymous"),a.alt=r.name,a.src=e.url}},{key:"draw",value:function(e){var t=this,r=e.naturalWidth,a=e.naturalHeight,i=e.rotate,n=void 0===i?0:i,o=e.scaleX,l=void 0===o?1:o,s=e.scaleY,c=void 0===s?1:s,u=this.file,f=this.image,h=this.options,d=document.createElement("canvas"),b=d.getContext("2d"),m=r/a,p=Math.abs(n)%180==90,g=Math.max(h.maxWidth,0)||1/0,v=Math.max(h.maxHeight,0)||1/0,y=Math.max(h.minWidth,0)||0,w=Math.max(h.minHeight,0)||0,O=Math.max(h.width,0)||r,U=Math.max(h.height,0)||a;if(p){var B=[v,g];g=B[0],v=B[1];var j=[w,y];y=j[0],w=j[1];var k=[U,O];O=k[0],U=k[1]}g<1/0&&v<1/0?g<v*m?v=g/m:g=v*m:g<1/0?v=g/m:v<1/0&&(g=v*m),0<y&&0<w?y<w*m?w=y/m:y=w*m:0<y?w=y/m:0<w&&(y=w*m),O<U*m?U=O/m:O=U*m;var x=-(O=Math.floor(C(Math.min(Math.max(O,y),g))))/2,A=-(U=Math.floor(C(Math.min(Math.max(U,w),v))))/2,M=O,T=U;if(p){var R=[U,O];O=R[0],U=R[1]}d.width=O,d.height=U,P(h.mimeType)||(h.mimeType=u.type);var D="transparent";if(u.size>h.convertSize&&"image/png"===h.mimeType&&(D="#fff",h.mimeType="image/jpeg"),b.fillStyle=D,b.fillRect(0,0,O,U),h.beforeDraw&&h.beforeDraw.call(this,b,d),!this.aborted&&(b.save(),b.translate(O/2,U/2),b.rotate(n*Math.PI/180),b.scale(l,c),b.drawImage(f,x,A,M,T),b.restore(),h.drew&&h.drew.call(this,b,d),!this.aborted)){var E=function(e){t.aborted||t.done({naturalWidth:r,naturalHeight:a,result:e})};d.toBlob?d.toBlob(E,h.mimeType,h.quality):E(L(d.toDataURL(h.mimeType,h.quality)))}}},{key:"done",value:function(e){var t=e.naturalWidth,r=e.naturalHeight,a=e.result,i=this.file,n=this.image,o=this.options;if(m&&!o.checkOrientation&&m.revokeObjectURL(n.src),a)if(o.strict&&a.size>i.size&&o.mimeType===i.type&&!(o.width>t||o.height>r||o.minWidth>t||o.minHeight>r))a=i;else{var l=new Date;a.lastModified=l.getTime(),a.lastModifiedDate=l,a.name=i.name,a.name&&a.type!==i.type&&(a.name=a.name.replace(p,function(e){var t=P(e)?e.substr(6):"";return"jpeg"===t&&(t="jpg"),".".concat(t)}(a.type)))}else a=i;this.result=a,o.success&&o.success.call(this,a)}},{key:"fail",value:function(e){var t=this.options;if(!t.error)throw e;t.error.call(this,e)}},{key:"abort",value:function(){this.aborted||(this.aborted=!0,this.reader?this.reader.abort():this.image.complete?this.fail(new Error("The compression process has been aborted.")):(this.image.onload=null,this.image.onabort()))}}],[{key:"noConflict",value:function(){return window.Compressor=g,r}},{key:"setDefaults",value:function(e){s(n,e)}}]),r}()});




function initMeta(){

  console.log("working...");
//alert("hello world");
  
  
  
 
  
  if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
    console.log("file reader support");
} else {
  console.warn('The File APIs are not fully supported in this browser.');
}
  
  
  
  
  
  /*
  var messagewindowcontainer = document.createElement("DIV");
  messagewindowcontainer.id = "messagewindowcontainer";
  messagewindowcontainer.style.width="auto";
   messagewindowcontainer.style.height="100%";
  messagewindowcontainer.style.position="fixed";
  messagewindowcontainer.style.top="20px";
  messagewindowcontainer.style.left="10px";
  messagewindowcontainer.style.zIndex = "9999";
   messagewindowcontainer.style.maxWidth="900px";
   messagewindowcontainer.style.maxHeight="100%";
   messagewindowcontainer.style.border = "2px solid red";
  */
  
  var messagewindow = document.createElement("DIV");
  messagewindow.id = "submitmeta";
  
  
  //
  
  var messagewindowfrdiv = document.createElement("DIV");
  messagewindowfrdiv.id = "messagewindowfrdiv";
  
  var messagewindowfilereader = document.createElement("INPUT");
  messagewindowfilereader.id="files";
  messagewindowfilereader.name="files[]";
   messagewindowfilereader.type="file";
   messagewindowfilereader.style.margin = "20px";
  messagewindowfilereader.style.padding = "30px";
  
  messagewindowfrdiv.append(messagewindowfilereader);
  
    var messagewindowoutput = document.createElement("DIV");
  messagewindowoutput.id = "list";
  
  
  var messagewindowdropzone = document.createElement("DIV");
  messagewindowdropzone.id = "dropzone";
   messagewindowdropzone.innerHTML = "Drop file here";
  messagewindowdropzone.style.margin = "20px";
  messagewindowdropzone.style.padding = "30px";
  messagewindowdropzone.style.border = "2px dashed #bbb";
  messagewindowdropzone.style.textAlign = "center";
   messagewindowdropzone.style.minHeight = "200px";
  
  
  
  
  //
  
   var messagewindowbutton = document.createElement("BUTTON");
  messagewindowbutton.id = "closemessagewindow";
  messagewindowbutton.innerHTML = "X";
  
  
  messagewindowbutton.style.position = "absolute";
  messagewindowbutton.style.top = "10px";
  messagewindowbutton.style.right = "10px";
  messagewindowbutton.style.padding = "4px 10px";
    messagewindowbutton.style.border = "0px";
     messagewindowbutton.style.background = "#333";
     messagewindowbutton.style.color = "#fff";

  
  
  messagewindow.style.zIndex = "999";
  
   messagewindow.style.minHeight="300px";
  messagewindow.style.minWidth="300px";
  //messagewindow.style.maxHeight="600px";
  messagewindow.style.height="auto";
  messagewindow.style.width="80%";
  
  messagewindow.style.position = "absolute";
messagewindow.style.top = "20px";
messagewindow.style.left = "0px";
messagewindow.style.margin = "20px";
  messagewindow.style.padding = "20px";
  
messagewindow.style.backgroundColor = "white"; 
  messagewindow.style.color="black";
  messagewindow.style.overflowY = "scroll";
  messagewindow.style.border="1px solid #333";
  
  messagewindow.style.boxShadow="10px 20px 10px #333";
  
   messagewindow.style.resize="both";
  
  
  var headerbar = document.createElement("div");
  headerbar.id="headerbar";
  headerbar.style.backgroundColor ="#333";
  headerbar.style.width ="80%";
  headerbar.style.textAlign = "center";
  headerbar.style.margin ="0 auto";
  headerbar.style.maxWidth ="80%";
  
  
  var title = document.createElement("H2");  
  title.id="submitmetaheader";
  title.style.color="#fff";
  var titleContent = document.createTextNode("Hwgwd Submit Metadata");
  title.appendChild(titleContent);
  
  
  headerbar.appendChild(title);
  messagewindow.appendChild(headerbar);  
  //messagewindow.appendChild(title);  
  
  
  //make headerbar draggable??

   messagewindow.appendChild(messagewindowdropzone);  
  //messagewindow.appendChild(messagewindowfilereader);  
  
  messagewindow.appendChild(messagewindowfrdiv);  
  
  
  messagewindow.appendChild(messagewindowoutput);  
  
 messagewindow.appendChild(messagewindowbutton);  
  
 
  var getbody = document.querySelector("body"); 
  
  
  //essagewindowcontainer.append(messagewindow);
  
  document.body.appendChild(messagewindow); 
  
  //document.body.appendChild(messagewindowcontainer); 
  
  
  
  
  
  
  
  //after messagewindow has been built, add handlers
  
  dragElement(document.getElementById("submitmeta"));
  
  function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  
   function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}//dragelement
  
  
  
  
  
  
  
  
  
  
  //handle direct click
  function handleFileClick(evt){
  
  var files = evt.target.files;
    handleFileSelect(files);
  }
  
  
   function handleFileDrop(evt){
  
 evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files;
    handleFileSelect(files);
  }
  
  
  
  
  
  //filehandler
   //function handleFileSelect(evt) {
      function handleFileSelect(files) {
     
        
         var previousRadio = null;
        
    
        /*once file uploaded we present a new menu of input boxes for meta data:
        filename: should be files[i].name
        url of download: auto-fill with current url
        license: cc0 etc - drop-down menu or checkbox of common licenses
        credit: @bobfish etc, defaults to 'none', need name box and url box
        timecreated: should be files[i].lastModifiedDate.toLocaleDateString() 
        timeperiod of image: day/month/year -- optional
        language: en or cy or other
        
        
        then tags for ordering/searching/linking - json array, one tag per line?
        then notes/description

        then checkbox for 'make a compressed copy for web/mobile?' with checkbox ticked
        maybe a resize option if image is over a certain size? with tag --small at end?
        
        the program will then create a file with [filename]__[url encoded properly]__[license]__[credit]__[timecreated]
        and a second file with all of that except "--compressed" at the end
        plus a json file with this as metadata with array of tags - use same filename just different extension, json v img etc
        */
     
     
        //first get rid of the file submit boxes
        
        var getDropZone = document.getElementById("dropzone");
          //var getFileSubmitBtn = document.getElementById("files");
        var getFileSubmitBtn = document.getElementById("messagewindowfrdiv");//wrapped button in a div
        
        
        if(!getDropZone || !getFileSubmitBtn){
        console.warn("no dropzone/file submit to remove");
        }
        else{
        getDropZone.style.display = "none";
        getFileSubmitBtn.style.display = "none";
        }
        
        
    // files is a FileList of File objects. List some properties.
        var f = files[0];//just deal with a single file submit
    var output = [];
    //for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                  '</li>');
      
      
      
      var thisfilename = f.name;
      var thisurl = window.location.href;
      var thisfiledate =  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a';
      
      console.log("info: "+thisfilename, thisurl, thisfiledate);
      
        //convert url to useable filename...
        
        var removeslash = thisurl.replace(/\//g, "__");//remove forward slashes
        console.log("removeslash - "+removeslash);
         var removecolon = removeslash.replace(/\:/g, "-_-");//remove forward slashes
        console.log("removecolon- "+removecolon);
        
        
        
        
        
        //build the metadata input fields...
        var filenamediv = document.createElement("DIV");
        filenamediv.id = "filenamediv";
        
        
        //filename input
         var inputfilenamelabel = document.createElement("LABEL");
        inputfilenamelabel.className="inputlab";
       inputfilenamelabel.setAttribute("for", "filename");
        
         var labeltext = document.createTextNode("Filename:"); 
        inputfilenamelabel.appendChild(labeltext);
        
        
   var inputfilename = document.createElement("INPUT");
  inputfilename.id="filename";
  inputfilename.name="filename";
  inputfilename.type="text";
  inputfilename.value=f.name;
  inputfilename.className = "metainputbox";
        
         //add the inputs to the div
        filenamediv.appendChild(inputfilenamelabel);
        
        filenamediv.appendChild(inputfilename);
        
        
        
        
        
        //url input
        
           var urldiv = document.createElement("DIV");
        urldiv.id = "urldiv";
        
        
         var urllabel = document.createElement("LABEL");
        urllabel.className="inputlab";
       urllabel.setAttribute("for", "urlinput");
        
         var urllabeltext = document.createTextNode("Downloaded from:"); 
        urllabel.appendChild(urllabeltext);
        
        
   var inputurl = document.createElement("INPUT");
  inputurl.id="urlinput";
  inputurl.name="urlinput";
  inputurl.type="text";
  inputurl.value=thisurl;
  inputurl.className = "metainputbox";
 
       
        
          urldiv.appendChild(urllabel);
        
        urldiv.appendChild(inputurl);
        
        
        
        //time created
        
         var timediv = document.createElement("DIV");
        timediv.id = "timediv";
        
        timediv.innerHTML = `<label classname="inputlab" for="inputtime" name="inputtime">Time created</label>
<input type="text" id="inputtime" value=${thisfiledate}>
`;
        
        
        
        
         //licence input
        
           var licencediv = document.createElement("DIV");
        licencediv.id = "licencediv";
        licencediv.style.display ="flex";
        
         licencediv.style.flexWrap = "wrap";
        licencediv.style.backgroundColor="#efefef";
        licencediv.style.border ="1px solid #ddd";
        licencediv.style.padding ="12px";
        licencediv.style.margin ="12px";
        
        /*let licencediv = document.createElement('div', { 
          id : 'licencediv',
          style : {}
        })
        */
        
        
        
        
        
         var licencelabel = document.createElement("LABEL");
        licencelabel.className="radiolab";
       licencelabel.setAttribute("for", "licenceinput");
         licencelabel.id="label-cc0";
         
         var licencelabeltext = document.createTextNode("CC0 / PUBLIC DOMAIN"); 
        licencelabel.appendChild(licencelabeltext);
        
        
   var cc0 = document.createElement("INPUT");
  cc0.id="cc0";
  cc0.name="licenceinput";
  cc0.type="radio";
  //inputurl.value=thisurl;
  cc0.className = "radioinputbox";
 
        
        //cc0.innerHTML += "CC0";
        
           licencelabel.appendChild(cc0);
        
        
     
        
     //cc4   
         var ccby4label = document.createElement("LABEL");
        ccby4label.setAttribute("for", "licenceinput");
        ccby4label.className="radiolab";
        ccby4label.id="label-ccby4";
        
         var ccby4labeltext = document.createTextNode("CC BY (Attribution)"); 
        ccby4label.appendChild(ccby4labeltext);
        
        var ccby4 = document.createElement("INPUT");
  ccby4.id="ccby4";
  ccby4.name="licenceinput";
  ccby4.type="radio";
  ccby4.value="ccby4";
  ccby4.className = "radioinputbox";
        
        ccby4label.appendChild(ccby4);
        
   
        
        
        //SA
        
        var ccbysalabel = document.createElement("LABEL");
        ccbysalabel.setAttribute("for", "licenceinput");
        ccbysalabel.className="radiolab";
        ccbysalabel.id="label-ccbysa";
        
         var ccbysalabeltext = document.createTextNode("CC BY SA (Attribution ShareAlike) "); 
        ccbysalabel.appendChild(ccbysalabeltext);
        
        var ccbysa = document.createElement("INPUT");
  ccbysa.id="ccbysa";
  ccbysa.name="licenceinput";
  ccbysa.type="radio";
  ccbysa.value="ccbysa";
  ccbysa.className = "radioinputbox";
        
        ccbysalabel.appendChild(ccbysa);
        
        
         //CC BY-ND 
        
        var ccbyndlabel = document.createElement("LABEL");
        ccbyndlabel.setAttribute("for", "licenceinput");
        ccbyndlabel.className="radiolab";
        ccbyndlabel.id="label-ccbynd";
        
        
         var ccbyndlabeltext = document.createTextNode("CC BY ND (No Derivatives) "); 
        ccbyndlabel.appendChild(ccbyndlabeltext);
        
        var ccbynd = document.createElement("INPUT");
  ccbynd.id="ccbynd";
  ccbynd.name="licenceinput";
  ccbynd.type="radio";
  ccbynd.value="ccbynd";
  ccbynd.className = "radioinputbox";
        
        ccbyndlabel.appendChild(ccbynd);
        
          //CC BY-NC
        
        var ccbynclabel = document.createElement("LABEL");
        ccbynclabel.setAttribute("for", "licenceinput");
        ccbynclabel.className="radiolab";
        ccbynclabel.id="label-ccbync";
        
        
         var ccbynclabeltext = document.createTextNode("CC BY NC (Attribution-NonCommercial ) "); 
        ccbynclabel.appendChild(ccbynclabeltext);
        
        var ccbync = document.createElement("INPUT");
  ccbync.id="ccbync";
  ccbync.name="licenceinput";
  ccbync.type="radio";
  ccbync.value="ccbync";
  ccbync.className = "radioinputbox";
        
        ccbynclabel.appendChild(ccbync);
        
        
           //CC BY-NC-SA
        
        var ccbyncsalabel = document.createElement("LABEL");
        ccbyncsalabel.setAttribute("for", "licenceinput");
        ccbyncsalabel.className="radiolab";
        ccbyncsalabel.id="label-ccbyncsa";
        
         var ccbyncsalabeltext = document.createTextNode("CC BY NC-SA (Attribution-NonCommercial ShareAlike) "); 
        ccbyncsalabel.appendChild(ccbyncsalabeltext);
        
        var ccbyncsa = document.createElement("INPUT");
  ccbyncsa.id="ccbyncsa";
  ccbyncsa.name="licenceinput";
  ccbyncsa.type="radio";
  ccbyncsa.value="ccbyncsa";
  ccbyncsa.className = "radioinputbox";
        
        ccbyncsalabel.appendChild(ccbyncsa);
        
        //CC BY-NC-ND
        
        var ccbyncndlabel = document.createElement("LABEL");
        ccbyncndlabel.setAttribute("for", "licenceinput");
        ccbyncndlabel.className="radiolab";
        ccbyncndlabel.id="label-ccbyncnd";
        
         var ccbyncndlabeltext = document.createTextNode("CC BY NC-SA (Attribution-NonCommercial NoDerivs) "); 
        ccbyncndlabel.appendChild(ccbyncndlabeltext);
        
        var ccbyncnd = document.createElement("INPUT");
  ccbyncnd.id="ccbyncnd";
  ccbyncnd.name="licenceinput";
  ccbyncnd.type="radio";
  ccbyncnd.value="ccbyncnd";
  ccbyncnd.className = "radioinputbox";
        
        ccbyncndlabel.appendChild(ccbyncnd);
        
        
        
        
        
        
        
        
        
          licencediv.appendChild(licencelabel);
        
    
        licencediv.appendChild(ccby4label);
         licencediv.appendChild(ccbysalabel);
        licencediv.appendChild(ccbyndlabel);
         licencediv.appendChild(ccbynclabel);
               licencediv.appendChild(ccbyncsalabel);
        licencediv.appendChild(ccbyncndlabel);
        
        
        /*
        
        ADD CREDIT
        
        */
        
        
        /*
        
        ADD LANGUAGE AND COMPRESS IMAGE
        
        */
        
         var creditdiv = document.createElement("DIV");
        creditdiv.id = "creditdiv";
       creditdiv.style.display ="flex";
        
         creditdiv.style.flexWrap = "wrap";
        creditdiv.style.margin = "12px";
        
        
        
        creditdiv.innerHTML=`<p>
 <label for="creditinput">Attribution required:</label>
<input type="text" id="creditinput" name="creditinput">
</p>
`;
        
        
        
        
         var optionsdiv = document.createElement("DIV");
        optionsdiv.id = "optionsdiv";
       optionsdiv.style.display ="flex";
        
         optionsdiv.style.flexWrap = "wrap";
        
        
        
        var langdrop = document.createElement("DIV");
        langdrop.id="langdropdiv";
        langdrop.width="40%";
        langdrop.style.margin="12px";
        
        
       langdrop.innerHTML=`<p><label>Select language</label>
             <select id = "selectlanguage">
  <option value="CY">Welsh</option>
 <option value="EN">English</option>
  <option value="AF">Afrikanns</option>
  <option value="SQ">Albanian</option>
  <option value="AR">Arabic</option>
  <option value="HY">Armenian</option>
  <option value="EU">Basque</option>
  <option value="BN">Bengali</option>
  <option value="BG">Bulgarian</option>
  <option value="CA">Catalan</option>
  <option value="KM">Cambodian</option>
  <option value="ZH">Chinese (Mandarin)</option>
  <option value="HR">Croation</option>
  <option value="CS">Czech</option>
  <option value="DA">Danish</option>
  <option value="NL">Dutch</option>
  <option value="ET">Estonian</option>
  <option value="FJ">Fiji</option>
  <option value="FI">Finnish</option>
  <option value="FR">French</option>
  <option value="KA">Georgian</option>
  <option value="DE">German</option>
  <option value="EL">Greek</option>
  <option value="GU">Gujarati</option>
  <option value="HE">Hebrew</option>
  <option value="HI">Hindi</option>
  <option value="HU">Hungarian</option>
  <option value="IS">Icelandic</option>
  <option value="ID">Indonesian</option>
  <option value="GA">Irish</option>
  <option value="IT">Italian</option>
  <option value="JA">Japanese</option>
  <option value="JW">Javanese</option>
  <option value="KO">Korean</option>
  <option value="LA">Latin</option>
  <option value="LV">Latvian</option>
  <option value="LT">Lithuanian</option>
  <option value="MK">Macedonian</option>
  <option value="MS">Malay</option>
  <option value="ML">Malayalam</option>
  <option value="MT">Maltese</option>
  <option value="MI">Maori</option>
  <option value="MR">Marathi</option>
  <option value="MN">Mongolian</option>
  <option value="NE">Nepali</option>
  <option value="NO">Norwegian</option>
  <option value="FA">Persian</option>
  <option value="PL">Polish</option>
  <option value="PT">Portuguese</option>
  <option value="PA">Punjabi</option>
  <option value="QU">Quechua</option>
  <option value="RO">Romanian</option>
  <option value="RU">Russian</option>
  <option value="SM">Samoan</option>
  <option value="SR">Serbian</option>
  <option value="SK">Slovak</option>
  <option value="SL">Slovenian</option>
  <option value="ES">Spanish</option>
  <option value="SW">Swahili</option>
  <option value="SV">Swedish </option>
  <option value="TA">Tamil</option>
  <option value="TT">Tatar</option>
  <option value="TE">Telugu</option>
  <option value="TH">Thai</option>
  <option value="BO">Tibetan</option>
  <option value="TO">Tonga</option>
  <option value="TR">Turkish</option>
  <option value="UK">Ukranian</option>
  <option value="UR">Urdu</option>
  <option value="UZ">Uzbek</option>
  <option value="VI">Vietnamese</option>
  <option value="XH">Xhosa</option>
             </select>
          </p>`;
        
        var compressoption = document.createElement("DIV");
        compressoption.id="compressoption";
        compressoption.width="40%";
        compressoption.style.margin="12px";
        
        compressoption.innerHTML=`<p>
  <label for="compress">Create compressed version of image?</label>
<input type="checkbox" id="compress" name="compress" value="compress" checked>
  
</p>
`;
        
        
        
        optionsdiv.appendChild(langdrop);
        optionsdiv.appendChild(compressoption);
        
        /*
        
        ADD TEXT AREA FOR ANY TRANSCRIPTION
        
        */
        
        var transcriptiondiv = document.createElement("DIV");
        transcriptiondiv.id = "transcription";
        
        var transinput = document.createElement("textarea");
transinput.name = "transcriptioninput";
//transinput.maxLength = "5000";
transinput.cols = "100";
transinput.rows = "10";
transinput.placeholder = "Paste transcription here";
        
        transcriptiondiv.append(transinput);
        
        
        
        
        
        //add the divs to the messagewindow
        var getMsgWindow = document.getElementById("submitmeta");
        getMsgWindow.appendChild(filenamediv);
           getMsgWindow.appendChild(urldiv);
        
           getMsgWindow.appendChild(timediv);
        
         getMsgWindow.appendChild(licencediv);
        
        getMsgWindow.appendChild(creditdiv);
        
        
       // getMsgWindow.appendChild(langdrop);
        
         getMsgWindow.appendChild(transcriptiondiv);
        
         getMsgWindow.appendChild(optionsdiv);
        
         
        
        
        
        
        
         function handleRadioButtonClick(e){
  
   
           var thisclick = e.target.id;
           if(!thisclick){
             console.log("no id so returning");
           return
           }
          
            console.log("button clicked "+thisclick);
             
             var checkforlabel = thisclick.includes("label-");
             if (checkforlabel){
               console.log("clicked label, returning");
             return;
             }
             
             
           
  
           if(previousRadio===null){
             console.log("previous null");
             previousRadio = thisclick;
             var getlabelid = "label-"+thisclick;
             console.log(getlabelid);
             var getRadioElement = document.getElementById(getlabelid);
             if(!getRadioElement){
             console.log("no element found");
             }
             else{
               console.log("styling element");
             getRadioElement.style.border="1px solid #0055ff";
               
             }
             }
           else{
           console.log("previousradio not null");
             var previousRadioElement = document.getElementById("label-"+previousRadio);
             previousRadioElement.style.border="1px dashed #666";
             
             var getRadioElement = document.getElementById("label-"+thisclick);
             getRadioElement.style.border="1px solid #0055ff";
             
             previousRadio = thisclick;
           }
           
           
           
           
  }//handle radio click
        
        
        //style the inputs/div
          var styleinputlabels = document.querySelectorAll('.inputlab');
    var styleinputs = document.querySelectorAll('.metainputbox');
  var styleradios = document.querySelectorAll('.radiolab');
       var styleradiobuttons = document.querySelectorAll('.radioinputbox');
        
  for(let i=0; i<styleinputlabels.length; i++){
  
  styleinputlabels[i].style.padding = "20px";
    styleinputlabels[i].style.color = "#8e8e8e";
    
  }
        
          for(let i=0; i<styleinputs.length; i++){
  
  styleinputs[i].style.margin = "10px";
    styleinputs[i].style.color = "#333";
      styleinputs[i].style.width = "50%";
  }
        
         for(let i=0; i<styleradios.length; i++){
  
  styleradios[i].style.padding = "6px";
    styleradios[i].style.color = "#333";
      styleradios[i].style.border ="1px dashed #666";
           styleradios[i].style.margin = "4px";
           
  }
        
          for(let i=0; i<styleradiobuttons.length; i++){
  
  styleradiobuttons[i].style.margin = "4px";
   styleradios[i].addEventListener('click', handleRadioButtonClick);
  }
        
        
        //call this if compress files box is checked... 
        handleCompress(f);
      //handleCompress(files[i]);
      
        
        
    //}//for loop to look through files
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
        
        
        
        
        
  }//handleFileSelect
  
  
 
  
  
  //checkbox will indicate whether to create compressed version, and perhaps slider for quality with default = 0.7
  
  
  function handleCompress(file){
  
  new Compressor(file, {
    quality: 0.6,
    success(result) {
      const formData = new FormData();
console.log("compress success, result and name: " +result+"=="+result.name);
   //   console.log("file== "+file);
      // The third parameter is required for server
      //formData.append('file', result, result.name);

      // Send the compressed image file to server with XMLHttpRequest.
      //axios.post('/path/to/upload', formData).then(() => {
       // console.log('Upload success');
     // });
    },
    error(err) {
      console.log(err.message);
    },
  });
    
    
  
  }//handlecompress
  

 // document.getElementById('files').addEventListener('change', handleFileSelect, false);
  
   document.getElementById('files').addEventListener('change', handleFileClick, false);
  

  
  
  //drop zone handler
  
  function handleDragOver(evt) {
    //console.log("dragover")
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  
  
  
  // Setup the dnd listeners.
  var dropZone = document.getElementById('dropzone');
  dropZone.addEventListener('dragover', handleDragOver, false);
//  dropZone.addEventListener('drop', handleFileSelect, false);
  
    dropZone.addEventListener('drop', handleFileDrop, false);
  
  
  
  
  
  //close message window handler
  
  var addclosehandler = document.getElementById("closemessagewindow");
  addclosehandler.addEventListener('click', closeWindow);

function closeWindow(){

console.log("close window");
  
  var subwindow = document.getElementById("submitmeta");
   subwindow.parentNode.removeChild(subwindow);
  
  
}//close window



  
  
  
  

}//initMeta

initMeta();
