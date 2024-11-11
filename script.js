// Expand and collapse boxes when clicked
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function() {
        // Collapse any previously expanded box and reset its border color
        document.querySelectorAll('.box').forEach(b => {
            b.classList.remove('expanded');
            b.style.borderColor = '#ddd'; // Reset border color to default
        });
        
        // Expand the clicked box and change its border color to green
        this.classList.add('expanded');
        this.style.borderColor = 'green';
    });
});

// Change background color based on selected color option
document.getElementById('color1').addEventListener('change', function() {
    document.getElementById('box1').style.backgroundColor = this.value;
});

document.getElementById('color2').addEventListener('change', function() {
    document.getElementById('box2').style.backgroundColor = this.value;
});

document.getElementById('color3').addEventListener('change', function() {
    document.getElementById('box3').style.backgroundColor = this.value;
});

// Adjust box size based on selected size option
document.getElementById('size1').addEventListener('change', function() {
    const size = this.value;
    adjustBoxSize('box1', size);
});

document.getElementById('size2').addEventListener('change', function() {
    const size = this.value;
    adjustBoxSize('box2', size);
});

document.getElementById('size3').addEventListener('change', function() {
    const size = this.value;
    adjustBoxSize('box3', size);
});

// Function to adjust box size based on selected option
function adjustBoxSize(boxId, size) {
    const box = document.getElementById(boxId);
    if (size === 'small') {
        box.style.width = '100%';
        box.style.height = '100px';
    } else if (size === 'medium') {
        box.style.width = '80%';
        box.style.height = '200px';
    } else if (size === 'large') {
        box.style.width = '60%';
        box.style.height = '300px';
    }
}
