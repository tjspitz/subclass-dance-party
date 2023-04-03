// Pseudoclassical
var SizeableDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr("src", "./assets/patrickResizing.png");
  this.$node.addClass("sizeable");

  this.$node.on("mouseenter", function () {
    $(".sizeable").animate(
      {
        width: "10rem",
        height: "10rem",
      },
      500
    );
  });
  this.$node.on("mouseleave", function () {
    $(".sizeable").animate(
      {
        width: "5rem",
        height: "5rem",
      },
      500
    );
  });
};

SizeableDancer.prototype = Object.create(Dancer.prototype);
SizeableDancer.prototype.constructor = SizeableDancer;

SizeableDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};

// ======================================================================
// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };
