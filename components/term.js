import GlitchedWriter, {
    wait,
    presets
} from "glitched-writer";

const writer = new GlitchedWriter("output", {
    ...presets.terminal,
    mode: "clear",
    html: true,
});

(async function () {
    await writer.write("Hello, world!");
    await wait(1000);
});

export default function Terminal(props) {
    return (
        <output id="output">{props.children}</output>
    )
}