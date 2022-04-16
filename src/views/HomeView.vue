<script lang="ts">
import GlitchedWriter from "vue-glitched-writer";

export default {
  components: {
    GlitchedWriter
  },
  data() {
    return {
      messages: [
        "",
        "Loading... Please wait.",
        "",
        "Welcome to DevOS [v1.3.2]",
        "",
        "PIZZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
      ],
      options: {
        html: true,
        mode: "",
        delay: 1250,
        steps: [1, 5],
        glyphs: `ABCDĐEFGHIJKLMNOPQRSTUVWXYZabcdđefghijklmnopqrstuvwxyzĄąĆćŻżŹźŃńóŁłАБВГҐДЂЕЁЄЖЗЅИІЇЙЈКЛЉМНЊОПРСТЋУЎФХЦЧЏШЩЪЫЬЭЮЯабвгґдђеёєжзѕиіїйјклљмнњопрстћуўфхцчџшщъыьэюяΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωάΆέΈέΉίϊΐΊόΌύΰϋΎΫΏĂÂÊÔƠƯăâêôơư一二三四五六七八九十百千上下左右中大小月日年早木林山川土空田天生花草虫犬人名女男子目耳口手足見音力気円入出立休先夕本文字学校村町森正水火玉王石竹糸貝車金雨赤青白数多少万半形太細広長点丸交光角計直線矢弱強高同親母父姉兄弟妹自友体毛頭顔首心時曜朝昼夜分週春夏秋冬今新古間方北南東西遠近前後内外場地国園谷野原里市京風雪雲池海岩星室戸家寺通門道話言答声聞語読書記紙画絵図工教晴思考知才理算作元食肉馬牛魚鳥羽鳴麦米茶色黄黒来行帰歩走止活店買売午汽弓回会組船明社切電毎合当台楽公引科歌刀番用何ĂÂÊÔƠƯăâêôơư1234567890‘?’“!”(%)[#]{@}/&<-+÷×=>$€£¥¢:;,.*•°·…±†‡æ«»¦¯—–~˜¨_øÞ¿▬▭▮▯┐└╛░▒▓○‼⁇⁈⁉‽ℴℵℶℷℸℲ℮ℯ⅁⅂⅃⅄₠₡₢₣₤₥₦₧₨₩₪₫€₭₮₯₰₱₲₳₴₵₶₷₸₹₺₻₼₽₾₿          ̴̵̶̷̸̡̢̧̨̛̖̗̘̙̜̝̞̟̠̣̤̥̦̩̪̫̬̭̮̯̰̱̲̳̹̺̻̼͇͈͉͍͎̀́̂̃̄̅̆̇̈̉̊̋̌̍̎̏̐̑̒̓̔̽̾̿̀́͂̓̈́͆͊͋͌̕̚ͅ ͓͔͕͖͙͚͐͑͒͗͛ͣͤͥͦͧͨͩͪͫͬͭͮͯ͘͜͟͢͝͞͠͡͏҉`
      },
      queueOptions: {
        loop: false,
      }
    };
  }
};
</script>

<template>
  <div class="wrapper">
    <pre>
      <GlitchedWriter 
        :text="messages"
        :preset="terminal"
        :options="options"
        :queue="queueOptions"
        tag="output"
      />
      <div class="user-input">
        <span class="incentive">
          $>
        </span>
        <input type="text" />
      </div>
    </pre>
  </div>
</template>

``

<style scoped>
::selection {
  background: #33202a;
  text-shadow: none;
}

pre {
  margin: 0;
  white-space: pre-wrap;
  margin-bottom: 80vh;
  animation: text-blink 0.01s steps(2) infinite;
}

@keyframes text-blink {

  from,
  to {
    opacity: 1;
  }

  50% {
    opacity: 0.8;
  }
}

@keyframes blink {

  from,
  to {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

#output:after {
  content: "▮";
  opacity: 1;
  animation: blink 1s steps(1) infinite;
}

#output.gw-writing:after {
  animation: none;
}

#output a {
  color: #fcab10;
  text-decoration: none;
  text-shadow: 0 0 5px #fcab10;
}

#output a:hover {
  font-weight: bold;
}

#output b {
  font-weight: normal;
}

#output b:hover {
  color: #5f5566;
  text-shadow: 0 0 5px #5f5566;
}

#output strong {
  font-weight: normal;
  color: #f05d5e;
  text-shadow: 0 0 5px #f05d5e;
}

#output i {
  color: #5f5566;
  text-shadow: 0 0 5px #5f5566;
  font-style: normal;
}

.wrapper {
  padding: 2rem;
  overflow-y: scroll;
  height: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.wrapper::-webkit-scrollbar {
  display: none;
}

.user-input {
  display: none;
}

.incentive {
  color: #fcab10;
}

input {
  width: 100%;
  margin-left: 10px;
  background: transparent;
  outline: none !important;
  border: none !important;
  color: #f5f4f6;
  font: 1.3rem Inconsolata, monospace;
  text-shadow: 0 0 5px #f5f4f6;
}
</style>

