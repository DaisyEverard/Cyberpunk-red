import SingleSkillTypeTable from "./SingleSkillTypeTable"
import "../style/skills.css"


const Skills = () => {

    return (
        <div className="flexRow" id="skills">
                <SingleSkillTypeTable skillType={"Awareness"}/>
                <SingleSkillTypeTable skillType={"Body"}/>
                <SingleSkillTypeTable skillType={"Control"}/>
                <SingleSkillTypeTable skillType={"Education"}/>
                <SingleSkillTypeTable skillType={"Fighting"}/>
                <SingleSkillTypeTable skillType={"Performance"}/>
                <SingleSkillTypeTable skillType={"Ranged Weapon"}/>
                <SingleSkillTypeTable skillType={"Social"}/>
                <SingleSkillTypeTable skillType={"Technique"}/>
        </div>
    )
}

export default Skills

 
//Characters get 86 Skill points to raise up any Skills they want. 

// No skill can be higher than 6.
// The following Skills must be at least Level 2: Athletics, Brawling, Concentration, Conversation, Education, Evasion, First Aid, Human Perception, Language (Streetslang), Local Expert (Your Home), Perception, Persuasion, and Stealth.


// Skills marked in the Master Skill List with a (x2) cost two Skill points to increase in level by one. 
//All other Skills cost one Skill point to increase in Level by one. 
// Don't forget the 4 Levels of Language you get free based on the Cultural Origin section of you Lifepath (See The Personals).