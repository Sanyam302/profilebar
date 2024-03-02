document.addEventListener('keydown', function(event) {
    const cube = document.getElementById('cube');
    let top = parseInt(cube.style.top) || 0;
    let left = parseInt(cube.style.left) || 0;
    const speed = 50;
    const step = 50;
  
    switch(event.key) {
      case 'ArrowUp':
        top -= step;
        break;
      case 'ArrowDown':
        top += step;
        break;
      case 'ArrowLeft':
        left -= step;
        break;
      case 'ArrowRight':
        left += step;
        break;
    }
  
    // Check boundaries
    const mazeWidth = document.getElementById('maze').offsetWidth;
    const mazeHeight = document.getElementById('maze').offsetHeight;
    if (top >= 0 && top + speed <= mazeHeight - speed &&
        left >= 0 && left + speed <= mazeWidth - speed) {
      cube.style.top = top + 'px';
      cube.style.left = left + 'px';
    }
  });
  