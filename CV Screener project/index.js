console.log("This is your CV Screener Project:");

//Array of object which contains details about the candidate:
const data = [
    {
        name: 'Anik Raj',
        Age: 21,
        City: 'Patna',
        Language: 'JavaScript',
        framework: 'React, Node.js, Express.js',
        image: 'https://randomuser.me/api/portraits/men/52.jpg'
    },

    {
        name: 'Asutosh Pratap',
        Age: 23,
        City: 'Kolkata',
        Language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/56.jpg'
    },

    {
        name: 'Shalini Srivastav',
        Age: 20,
        City: 'Mumbai',
        Language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Abhinav Sukhla',
        Age: 25,
        City: 'Noida',
        Language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/58.jpg'
    },

    {
        name: 'Jiya Chakarborty',
        Age: 27,
        City: 'Kolkata',
        Language: 'Go',
        framework: 'GO Framework',
        image: 'https://randomuser.me/api/portraits/women/59.jpg'
    }
]


//CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function() {
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    }
}

const candidates = cvIterator(data);

nextCV();

//Button listener for next Button:
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV() {
    const currentCandidate = candidates.next().value

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if(currentCandidate != undefined) {
        
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
    
        profile.innerHTML = `<ul class="list-group">
                            <li class="list-group-item">${currentCandidate.name}</li>
                            <li class="list-group-item">${currentCandidate.Age} years old</li>
                            <li class="list-group-item">Lives in ${currentCandidate.City}</li>
                            <li class="list-group-item">Primarily works on ${currentCandidate.Language}</li>
                            <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
                            </ul>`

    }
    else {
        alert('End of Candidate Applications');
        window.location.reload();
    }

}