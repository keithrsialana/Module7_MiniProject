import fs from "fs";
import c from "colors";
import inq from "inquirer";

let person = {};

inq
	.prompt([
		{
			type: "input",
			message: c.magenta("What is your name?"),
			name: "personName",
		},
		{
			type: "list",
			message: c.magenta("What is your location?"),
			name: "location",
			choices: [
				"North America",
				"Europe",
				"Asia",
				"South America",
				"Africa",
				"Australia",
				"Antarctica",
			],
		},
		{
			type: "input",
			message: c.magenta("Tell me about yourself."),
			name: "bio",
		},
		{
			type: "input",
			message: c.magenta("What's your LinkedIn url?"),
			name: "linkedIn",
		},
		{
			type: "input",
			message: c.magenta("What's your GitHub url?"),
			name: "github",
		},
	])
	.then((response) => {
		person = {
			name: response.personName,
			location: response.location,
			bio: response.bio,
			linkedIn: response.linkedIn,
			gitHub: response.github,
		};

		const websiteHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${person.name}</title>
        </head>
        <body>
            <header></header>
            <main>
                <h1>${person.name}</h1>
                <h2>${person.name}'s bio</h2>
                <p>${person.bio}</p>
                <h2>${person.name}'s location</h2>
                <p>${person.location}</p>
                <h2>${person.name}'s LinkedIn Link</h2>
                <p>
                    <a href="${person.linkedIn}">${person.name}'s LinkedIn</a>
                </p>
                <h2>${person.name}'s GitHub Link</h2>
                <p>
                    <a href="${person.gitHub}">${person.name}'s GitHub</a>
                </p>
            </main>
            <footer></footer>
        </body>
        </html>
        `;

		fs.writeFile("index.html", websiteHTML, (err) => {
			err ? console.error(err) : console.log(c.green("File Created!"));
		});
	});
