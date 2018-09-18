database.ref('expenses').once('value').then((snapShot) => {
    const expenses = [];

    snapShot.forEach((childSnapShot) => {
        expenses.push({
            id: childSnapShot.key,
            ...childSnapShot.val()
        });
        console.log(childSnapShot.key)
    });
    console.log(expenses)
})

// database.ref('expenses').push({
//     description: 'Electric Bill',
//     note: 'No notes',
//     amount: 500,
//     createdAt: 1536845
// });

// database.ref('expenses').push({
//     description: 'Water Bill',
//     note: 'No notes too',
//     amount: 50,
//     createdAt: 1536455
// });

// database.ref('expenses').push({
//     description: 'College Fee',
//     note: 'No notes added here',
//     amount: 50065,
//     createdAt: 7836845
// });

//database.ref('expenses/-LMW5mucrCR_9zrde8Cr').remove()

// database.ref().once('value').then((snapShot) => {
//     const val = snapShot.val();
//     console.log(val);
// });

// database.ref().on('value', (snapShot) => {
//     const val = snapShot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// }, (e) => {
//     console.log(e)
// });

// setTimeout(() => {
//     database.ref().update({
//         name: 'Prashanth',
//         'job/company': 'Google'
//     })
// }, 5000)


// database.ref().set({
//     name: 'Banu Prashanth G S',
//     age: 24,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Banglore',
//         country: 'India'
//     },
//     isSingle: false
// }).then(() => {
//     console.log('First Data Saved!')
// }, (error) => {
//     console.log('Error: ', error);
// });

// database.ref('attributes').set({
//     height: `5 10'`,
//     weight: 90
// }).then(() => {
//     console.log('Second data Saved!')
// }, (error) => {
//     console.log('Error: ', error);
// });

// // database.ref('isSingle').remove().then(() => {
// //     console.log('Data Removed');
// // }).catch((error) => {
// //     console.log('Error:', error)
// // })

// database.ref().update({
//     isSingle: null,
//     stressLevel: 9,
//     'job/company': 'MicroSoft',
//     'location/country': 'USA'
// })

// console.log('Firebase')
