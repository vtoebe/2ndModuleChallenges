const voters = [{
        name: 'Bob',
        age: 30,
        voted: true
    },
    {
        name: 'Jake',
        age: 32,
        voted: true
    },
    {
        name: 'Kate',
        age: 25,
        voted: false
    },
    {
        name: 'Sam',
        age: 20,
        voted: false
    },
    {
        name: 'Phil',
        age: 21,
        voted: true
    },
    {
        name: 'Ed',
        age: 55,
        voted: true
    },
    {
        name: 'Tami',
        age: 54,
        voted: true
    },
    {
        name: 'Mary',
        age: 31,
        voted: false
    },
    {
        name: 'Becky',
        age: 43,
        voted: false
    },
    {
        name: 'Joey',
        age: 41,
        voted: true
    },
    {
        name: 'Jeff',
        age: 30,
        voted: true
    },
    {
        name: 'Zack',
        age: 19,
        voted: false
    }
];

// Solution created during class
function getVotesResultsFilter(voters) {
    const youngPeople = voters.filter(voter => voter.age >= 18 && voter.age <= 25)
    const youngVotes = youngPeople.filter(youngVoter => youngVoter.voted)
    const midPeople = voters.filter(voter => voter.age >= 26 && voter.age <= 35)
    const midVotes = midPeople.filter(midVoter => midVoter.voted)
    const oldPeople = voters.filter(voter => voter.age >= 36 && voter.age <= 55)
    const oldVotes = oldPeople.filter(oldVoter => oldVoter.voted)
    return {
        young: youngPeople.length,
        youngVotes: youngVotes.length,
        mid: midPeople.length,
        midVotes: midVotes.length,
        old: oldPeople.length,
        oldVotes: oldVotes.length
    }
}

console.log(getVotesResultsFilter(voters))

// Solution created using Reduce
const getAgeRange = (voter, rangeStart, rangeEnd) => voter.age >= rangeStart && voter.age <= rangeEnd

const handleYoung = (voterAcc, voter) => ({
    ...voterAcc,
    young: {
        people: voterAcc.young.people + 1,
        voted: voter.voted ? voterAcc.young.voted + 1 : voterAcc.young.voted
    }
})

const handleMid = (voterAcc, voter) => ({
    ...voterAcc,
    mid: {
        people: voterAcc.mid.people + 1,
        voted: voter.voted ? voterAcc.mid.voted + 1 : voterAcc.mid.voted
    }
})

const handleOld = (voterAcc, voter) => ({
    ...voterAcc,
    old: {
        people: voterAcc.old.people + 1,
        voted: voter.voted ? voterAcc.old.voted + 1 : voterAcc.old.voted
    }
})


const getVotersResults = voters.reduce(
    (voterAcc, voter) => {
        if (getAgeRange(voter, 18, 25)) {
            return handleYoung(voterAcc, voter)
        }

        if (getAgeRange(voter, 26, 35)) {
            return handleMid(voterAcc, voter)

        }

        if (getAgeRange(voter, 36, 55)) {
            return handleOld(voterAcc, voter)
        }
    }, {
        young: {
            people: 0,
            voted: 0
        },
        mid: {
            people: 0,
            voted: 0
        },
        old: {
            people: 0,
            voted: 0
        }
    }
)

console.log(getVotersResults)