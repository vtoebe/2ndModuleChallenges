const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const getAgeRange = (voter, rangeStart, rangeEnd) => voter.age >= rangeStart && voter.age <= rangeEnd

const handleVotesData = ageGroup => (voterAcc, voter) => ({
    ...voterAcc,
    [ageGroup]: {
        people: voterAcc[ageGroup].people + 1,
        voted: voter.voted ? voterAcc[ageGroup].voted + 1 : voterAcc[ageGroup].voted
    }
})

const handleYoung = handleVotesData('young')
const handleMid = handleVotesData('mid')
const handleOld = handleVotesData('old')

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
        young: { people: 0, voted: 0 },
        mid: { people: 0, voted: 0 },
        old: { people: 0, voted: 0 }
    }
)

console.log(getVotersResults)