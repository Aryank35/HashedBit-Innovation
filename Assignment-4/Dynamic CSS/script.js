
document.getElementById('colorchange').addEventListener('click', function() {
    let color = document.getElementById('colorbox').value;
    document.getElementById('text-container').style.color = color;
  });
  
  
  document.getElementById('fontsize').addEventListener('input', function() {
    let size = this.value + 'px';
    document.getElementById('text-container').style.fontSize = size;
  });
  
  
  document.getElementById('italic').addEventListener('click', function() {
    let textStyle = document.getElementById('text-container').style.fontStyle;
    if (textStyle === 'italic') {
      document.getElementById('text-container').style.fontStyle = 'normal';
    } else {
      document.getElementById('text-container').style.fontStyle = 'italic';
    }
  });
  
  
  document.getElementById('underline').addEventListener('click', function() {
    let textStyle = document.getElementById('text-container').style.textDecoration;
    if (textStyle === 'underline') {
      document.getElementById('text-container').style.textDecoration = 'none';
    } else {
      document.getElementById('text-container').style.textDecoration = 'underline';
    }
  });
  
  
  document.getElementById('bold').addEventListener('click', function() {
    let textStyle = document.getElementById('text-container').style.fontWeight;
    if (textStyle === 'bold') {
      document.getElementById('text-container').style.fontWeight = 'normal';
    } else {
      document.getElementById('text-container').style.fontWeight = 'bold';
    }
  });
  
  
  document.getElementById('list').addEventListener('change', function() {
    let fontFamily = this.value;
    document.getElementById('text-container').style.fontFamily = fontFamily;
  });
  
  
  document.getElementById('getstyle').addEventListener('click', function() {
    let textContainer = document.getElementById('text-container');
    let cssProps = '';
    cssProps += 'color: ' + window.getComputedStyle(textContainer).color + '; ';
    cssProps += 'font-size: ' + window.getComputedStyle(textContainer).fontSize + '; ';
    cssProps += 'font-style: ' + window.getComputedStyle(textContainer).fontStyle + '; ';
    cssProps += 'font-weight: ' + window.getComputedStyle(textContainer).fontWeight + '; ';
    cssProps += 'font-family: ' + window.getComputedStyle(textContainer).fontFamily + '; ';
    document.getElementById('css-props').textContent = cssProps;
  });
  