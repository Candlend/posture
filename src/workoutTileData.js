import badminton from "./assets/badminton-grass-racket.jpg";
import situp from "./assets/situp.jpg";
import running from "./assets/running.jpg";
import football from "./assets/football.jpg";
import hiking from "./assets/hiking.jpg";
import swimming from "./assets/swimming.jpg";
import skateboards from "./assets/skateboards.jpg";
import pushup from "./assets/pushup.jpg";
import gymnastics from "./assets/aerobics-backlit.jpg";
import basketball from "./assets/basketball.jpg";

const workoutTileData = [
	{
		img: badminton,
		title: 'Badminton',
		featured: true
	},
	{
		img: situp,
		title: 'Sit-ups',
		featured: false,
		like: true,
		description: "The sit-up (or curl-up) is an abdominal endurance training exercise commonly performed to strengthen and tone the abdominal muscles. It is similar to a crunch (crunches target the rectus abdominus and also work the external and internal obliques), but sit-ups have a fuller range of motion and condition additional muscles."
	},
	{
		img: football,
		title: 'Football',
		featured: false
	},
	{
		img: running,
		title: 'Long-distance Run',
		featured: true
	},
	{
		img: hiking,
		title: 'Hiking',
		featured: false
	},
	{
		img: swimming,
		title: 'Swimming',
		featured: false
	},
	{
		img: skateboards,
		title: 'Skateboards',
		featured: false
	},
	{
		img: pushup,
		title: 'Push-ups',
		featured: false,
		like: true,
		description: "A push-up (or press-up) is a common calisthenics exercise performed in a prone position by raising and lowering the body using the arms. Push-ups exercise the pectoral muscles, triceps, and anterior deltoids, with ancillary benefits to the rest of the deltoids, serratus anterior, coracobrachialis and the midsection as a whole. Push-ups are a basic exercise used in civilian athletic training or physical education and commonly in military physical training."
	},
	{
		img: basketball,
		title: 'Basketball',
		featured: false
	},
	{
		img: gymnastics,
		title: 'Gymnastics',
		featured: false
	}
];

export default workoutTileData;
