<script>
import Draggable from "vuedraggable";

function computeVmIndex(vnodes, element, indexOffset) {
  return vnodes.map(elt => elt.elm).indexOf(element) + indexOffset;
}

export default {
    extends: Draggable,
    props: {
        indexOffset: {
            type: Number,
            default: 0,
        }
    },

    methods: {
        getUnderlyingVm(htmlElt) {
      const index = computeVmIndex(this.getChildrenNodes() || [], htmlElt, this.indexOffset);
      if (index === -1) {
        //Edge case during move callback: related element might be
        //an element different from collection
        return null;
      }
      const element = this.realList[index];
      return { index, element };
    },
    }
}
</script>