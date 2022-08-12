import { RunFunction, Options } from "./Interfaces";

class Command {
    name: string;
    description: string;
    permissions: string;
    run: RunFunction;

    constructor(options: Options) {
        this.name = options.name;
        this.description = options.description;
        this.permissions = options.permissions;
        this.run = options.run;
    };
};

export default Command;