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

const handleVotesData = group => (voterAcc, voter) => ({
    ...voterAcc,
    [group]: {
        people: voterAcc[group].people + 1,
        voted: voter.voted ? voterAcc[group].voted + 1 : voterAcc[group].voted
    }
})

const YOUNG = {rangeStart: 18, rangeEnd: 25}
const MID = {rangeStart: 26, rangeEnd: 35}
const OLD = {rangeStart: 36, rangeEnd: 55}
const ageGroups = {YOUNG, MID, OLD}

const votersData = Object.keys(ageGroups).reduce( (voterAcc, group) =>({
        ...voterAcc,
        [group]: { people: 0, voted: 0 }
    }), {}
)

const getVotersResults = voters.reduce(
    (voterAcc, voter) => {
        for (const group in ageGroups){
            const {rangeStart, rangeEnd} = ageGroups[group]

            if (getAgeRange(voter, rangeStart, rangeEnd)){
                return handleVotesData(group)(voterAcc, voter)
            }
        }
    }, votersData
)

console.log(getVotersResults)