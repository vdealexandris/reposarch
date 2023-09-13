import { Toc } from "../../../../types/types";

import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";
import Quote from "../../../../components/Common/Quote";
import EmojiTitle from "../../../../components/Common/EmojiTitle";
import PdfViewer from "../../../../components/Common/PdfViewer";

export const content: Toc = [
  {
    element: <EmojiTitle emoji={"❔"} title={"What does scripting mean?"} />,
  },
  {
    element: (
      <Image
        src="/images/week03/scripting-cultures.jpg"
        alt="Mark Burry - Scripting Cultures"
        caption={"Mark Burry - Scripting Cultures"}
      />
    ),
    notes: "Mark Burry - Scripting Cultures",
  },
  {
    element: (
      <Quote
        quote={
          "Scripting is the capability offered by almost all design software packages that allows the user to adapt, customise or completely reconfigure software around their own predilections and modes of working"
        }
        author={"Mark Burry - Scripting Cultures"}
      />
    ),
  },
  {
    element: (
      <Quote
        quote={
          "Authoritative customisation of the ‘black box’ affords the designer opportunities to escape the strictures inherent in any software by definition in ways not thought of by the makers"
        }
        author={"Mark Burry - Scripting Cultures"}
      />
    ),
  },
  {
    element: (
      <Quote
        quote={
          "Most of the designers who use computers as a core part of their digital practice do not automatically turn to programming to form part of their repertoire. By not doing so users at once **place their entire trust in the software engineers** in the expectation that those anonymous collaborators have thought through all that might be wanted by the designers "
        }
        author={"Mark Burry - Scripting Cultures"}
      />
    ),
  },
];