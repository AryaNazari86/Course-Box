var courses = [
    {
        title: 'Dribbling', category: 'Sports', author: '@Arya', participants: '100', likes: '99', description: 'something ...', image: require(`../assets/Images/messi.jpeg`), key: '1', content: [
            {
                title: 'Low Dribble', content: [
                    { title: 'how to', color: 'red' },
                    { title: 'examples', color: 'red' }
                ],
                color: 'red'
            },
            {
                title: 'Speed Dribble', content: [
                    { title: 'how to', color: 'blue' },
                    { title: 'examples', color: 'blue' }
                ],
                color: 'blue'
            },
            {
                title: 'Change-of-pace Dribble', content: [
                    { title: 'how to', color: 'green' },
                    { title: 'examples', color: 'green' }
                ],
                color: 'green'
            },
        ],
    },
    { title: 'Hacking', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/hacking_course.jpg`), key: '2' },
    { title: 'Javascript Beginner Course', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/Javascript_Course.png`), key: '3' },
    { title: 'HTML Beginner Course', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/HTML_Course.jpeg`), key: '4' },
    { title: 'CSS Beginner Course', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/CSS_Course.png`), key: '5' }, ,
    { title: 'PyQT5 Course', category: 'Programming', author: '@Arya', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/PyQT5_Course.jpeg`), key: '6' },
    { title: 'C# Course', category: 'Programming', author: '@MHK', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/c-sharp-course.jpeg`), key: '7' },
    { title: 'Soccer for beginners', category: 'Sports', author: '@Person', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/soccer_Course.jpeg`), key: '8' },
]

export default courses;