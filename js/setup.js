/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line strict
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('.hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
WIZARD_COATCOLOR = ['rgb (101, 137, 164)','rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [{}, {}, {}, {}];

for (var i = 0; i < 4; i++) {
  wizards[i].name = WIZARD_NAMES [Math.floor(8 * Math.random())] + ' ' + WIZARD_SURNAME [Math.floor(8 * Math.random())];
  wizards[i].coatColor = WIZARD_COATCOLOR [Math.floor(5 * Math.random())];
  wizards[i].eyesColor = WIZARD_EYESCOLOR [Math.floor(5 * Math.random())];

}
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
// similarListElement.appendChild(wizardElement);


