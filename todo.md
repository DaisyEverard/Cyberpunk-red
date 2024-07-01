
Derived Stats: 
- When you lose Humanity points you will sometimes have to lower your EMP Statistic. This happens every time the tens place of your Humanity value is lowered. For instance, a Character with 44 Humanity has an EMP of 4 until their Humanity is lowered to 39, at which point their EMP lowers to 3.
Use modulus. if (humanity % 10) == 0 before removing a humanity point, EMP -= 1

- raising humanity with therapy
- calculate death based on HP
- Calculate death save

Role Abilities:

- Add levels for Role abilities
- Sort out data structure in roles.json (it's probably going to be messy no matter what since the character abilities work in very different ways depending on character type)

Modal: 
- sort out small screen display
- stop show button and icon being hidden beneath the top of the modal container (see emp modal)
- hide scrollbar (is this possible with overflow: scroll?)
- Use Portal?

Skills tables:
- remove tables and use cards for each skill instead? Maybe a row for each skill type with a card for each skill in it Would take up a lot more space but also probably look neater.

Styling:
- Define custome colours in tailwind.config.js for the colour pallete (currently in index.css :root selector)

Cleanup:
- Convert as much CSS as possible to Tailwind classes
- Once all main elements are added, consider a better layout with a coherent colour scheme
- Sort out types:
  - rolesJson
  - SVG iconMap
  - useContext states and methods do not exist on type '{}'




  

