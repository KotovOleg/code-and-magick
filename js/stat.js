'use strict';

var CLOUD_WIDTH = 420; //  ширина облака
var CLOUD_HEIGHT = 270; // высота облака
var CLOUD_X = 100;
var CLOUD_Y = 10;

var GAP = 10; // разрыв
var GIST_GAP = 50; // расстояние между колонками
var GIST_WIDTH = 40; // ширина колонки
var GIST_HEIDTH = -150; // высота гистограммы
var GIST_START = 245; // начальная точка гистограммы
var FONT_GAP = 15; // расстояние между гистограммой и именами


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

};
window.renderStatistics = function (ctx, names, times) {


  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили', 130, 50);
  ctx.fillText('Список результатов', 130, 70);
  this.console.log(times);
  var maxTimes = 0;
  for (var i = 0; i < times.length; i++) {
    console.log(times[i]);
    if (times[i] > maxTimes) {
      maxTimes = times[i];
    }
  }
  console.log(maxTimes);


  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'black';
      ctx.fillText(names[i], CLOUD_X + GIST_WIDTH * i + GIST_GAP * (i + 1), GIST_START + FONT_GAP);
      ctx.fillText(Math.floor(times[i]), CLOUD_X + GIST_WIDTH * i + GIST_GAP * (i + 1), GIST_START + (GIST_HEIDTH * times[i]) / maxTimes - 5);
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + GIST_WIDTH * i + GIST_GAP * (i + 1), GIST_START, GIST_WIDTH, (GIST_HEIDTH * times[i]) / maxTimes);
    } else {
      ctx.fillStyle = 'black';
      ctx.fillText(names[i], CLOUD_X + GIST_WIDTH * i + GIST_GAP * (i + 1), GIST_START + FONT_GAP);
      ctx.fillText(Math.floor(times[i]), CLOUD_X + GIST_WIDTH * i + GIST_GAP * (i + 1), GIST_START +(GIST_HEIDTH * times[i]) / maxTimes - 5);
      ctx.fillStyle = 'rgba(0, 0, 0, 7)';
      ctx.fillStyle = 'hsl(240,' + Math.floor(100 * Math.random()) + '%' + ',50%)';
      ctx.fillRect(CLOUD_X + GIST_WIDTH * i + GIST_GAP * (i + 1), GIST_START, GIST_WIDTH, (GIST_HEIDTH * times[i]) / maxTimes);
    }
  }


};


