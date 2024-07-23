Derived Stats:
figure out if anything except items lower humanity

- raising humanity with therapy. If humanity goes up a 10s place, this also brings empathy back up.
- Calculate death save
- humanity doesn't raise EMP correctly if healing more than 1 at once.

Role Abilities:

- Add levels for Role abilities
- Sort out data structure in roles.json (it's probably going to be messy no matter what since the character abilities work in very different ways depending on character type)

Modal:

- sort out small screen display
- stop show button and icon being hidden beneath the top of the modal container (see emp modal)
- hide scrollbar on boxes small enough not to need it (is this possible with overflow: scroll?)
- Use Portal?

Skills tables:

- remove tables and use cards for each skill instead? Maybe a row for each skill type with a card for each skill in it Would take up a lot more space but also probably look neater.
- Make display responsive for small screens

  Skills Options:

- customize (change names) of new options
- Add a way to remove an option
- Can't remove all language or local knowledge options as they have a mimum number of skills attached.
- Can't remove local knowledge (your home) as this has a minimum of 2
- Must keep at least one cultural background based language with a level of at least 4, or up to 4 cultural background langauges with a combined total of at least 4
- Consider constricting options to set list for martial arts
- Find out if there is a set list for instruments you can learn and consider constriction options for instrument
- Find a better way to deal with the options CSS, currrently has ID to have specificitiy higher than nth-of-type selector. Tailwind version of important on the .option-tr selector.

Critical Injuries

Armour/Damage:
Whenever you take damage:

1. Your Attacker rolls the damage for their attack.
2. Subtract your armor's SP in that location (if they didn't target your head using an Aimed Shot, this is always your body location) from the damage.\* Subtract any remaining damage from your Hit Points.
3. If you ended up taking any damage, your armor on that location is still ablated, reducing its SP by 1 point, until it is repaired.
   \*Some things that cause damage, like poisons and fire, bypass armor.

Styling:

- Define custome colours in tailwind.config.js for the colour pallete (currently in index.css :root selector)
- Create tabs: at least one for the character creation stage, and one for main play stage
  - you can't freely change skill levels or stats after initial setup

Cleanup:

- Convert as much CSS as possible to Tailwind classes
- Once all main elements are added, consider a better layout with a coherent colour scheme
- Sort out types:
  - rolesJson
  - SVG iconMap
  - useContext states and methods do not exist on type '{}'
