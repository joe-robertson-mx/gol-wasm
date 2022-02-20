import copy from "rollup-plugin-copy";
import { wasm } from "@rollup/plugin-wasm"

console.warn ('Runnin..')
export default args => {
    const result = args.configDefaultConfig;
    return result.map((config, index) => {
        if (index === 0) {
            const plugins = config.plugins || []
            config.plugins = [
                ...plugins,
                copy({
                    targets: [{ src: "node_modules/wasm-game-of-life-joerob319/*.wasm", dest: "dist/tmp/widgets/mendix/golwasm/" }]
                }),
                // wasm({
                //     sync: ['wasm-game-of-life-joerob319/wasm_game_of_life_bg.wasm']
                // })
                wasm()
            ]   
        }
        return config;
    });
};
