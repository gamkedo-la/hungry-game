function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function rect(topLeftX, topLeftY, boxWidth, boxHeight, lineWidth, color) {
    canvasContext.beginPath();
    canvasContext.lineWidth = lineWidth;
    canvasContext.strokeStyle = color;
    canvasContext.rect(topLeftX, topLeftY, boxWidth, boxHeight);
    canvasContext.stroke();

}

function rectHud(topLeftX, topLeftY, boxWidth, boxHeight, lineWidth, color) {
    hudCanContext.beginPath();
    hudCanContext.lineWidth = lineWidth;
    hudCanContext.strokeStyle = color;
    hudCanContext.rect(topLeftX, topLeftY, boxWidth, boxHeight);
    hudCanContext.stroke();

}

function colorRectHud(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
    hudCanContext.fillStyle = fillColor;
    hudCanContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function colorCircle(centerX, centerY, radius, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
  canvasContext.fill();
}

function spriteSafeEdge(img,frameNow,dim,offX,offY) {
  var wid;
  if(frameNow*dim + dim >= img.width) {
    wid = img.width - frameNow*dim;
  } else {
    wid = dim;
  }
  canvasContext.drawImage(img,
        frameNow * dim, 0, // top-left corner of tile art
        wid, dim, // get full tile size from source
        offX-wid/2,offY-dim/2, // x,y top-left corner for image destination
        wid, dim); // draw full tile size for destination
}

// warning: currently is written assuming PLAYER_RADIUS is same for all chars
function drawFacingLeftOption(image,atX,atY,ifFlipped, frameNum) {
  var imageDim = image.height; // making assumption of square animation frames to simplify strips
  if(frameNum == undefined) {
    frameNum = 0;
  }

  if(ifFlipped) {
    canvasContext.save();
    canvasContext.translate(atX, atY);
    canvasContext.scale(-1, 1);

    spriteSafeEdge(image,frameNum,imageDim,0,0);

    canvasContext.restore();
  } else {
    spriteSafeEdge(image,frameNum,imageDim,atX,atY);
  }
}


function drawHudText(text, x, y, font, color, align) {
    hudCanContext.fillStyle = color;
    hudCanContext.font = font;
    hudCanContext.textAlign = align;
    hudCanContext.fillText(text,x,y);
}



function drawImageWithFade(image, x, y, opacity) {
    canvasContext.globalAlpha = opacity;
    canvasContext.drawImage(image, x, y);
    canvasContext.globalAlpha = 1;
}