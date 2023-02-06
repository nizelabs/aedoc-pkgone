/**
 * A demo library to showcase cross repository documentation setup.
 *
 * @remarks
 * Package repository only produce API documentation files in markdown format.
 * If any of the generated files is changed, a Github Workflow will be run to sync
 * the changes into main documentation repository.
 *
 * @packageDocumentation
 */

/**
 * The four dormitories of Hogwarts.
 *
 * @public
 */
export type WizardDormitory =
	| "Gryffindor"
	| "Hufflepuff"
	| "Ravenclaw"
	| "Slytherin";

/**
 * Represent a wizard entity.
 *
 * @public
 */
export class Wizard {
	name: string;
	dorm: WizardDormitory;

	constructor({
		name,
		dorm,
	}: {
		/**
		 * The full name of the wizard.
		 */
		name: string;
		/**
		 * The dormitory where the wizard will stay.
		 */
		dorm: WizardDormitory;
	}) {
		this.name = name;
		this.dorm = dorm;
	}
}

/**
 * Translate magic spell in asimple manner.
 *
 * @returns The shor translation of the spell.
 *
 * @public
 */
export function translateSpell({
	spell,
}: {
	/**
	 * The name of the spell.
	 */
	spell:
		| "Accio"
		| "Alohomora"
		| "Expecto Patronum"
		| "Lumos"
		| "Petrificus Totalus"
		| "Reparo"
		| "Wingardium Leviosa";
}) {
	switch (spell) {
		case "Accio":
			return "Got you!";
		case "Alohomora":
			return "Open the door!";
		case "Expecto Patronum":
			return "It's okay! Everything's allright!";
		case "Lumos":
			return "Turn on the light, please!";
		case "Petrificus Totalus":
			return "Freeze!";
		case "Wingardium Leviosa":
			return "Levitate!";
		default:
			return "Wrong spell!";
	}
}
