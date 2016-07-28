// @source Text/RegularExpressions/RegexEngine.js

Bridge.define("System.Text.RegularExpressions.RegexEngineState", {
    txtIndex: 0, // current index
    capIndex: null, // first index of captured text
    capLength: 0, // current length
    passes: null,
    groups: null, // captured groups

    constructor: function () {
        this.passes = [];
        this.groups = [];
    },

    logCapture: function (length) {
        if (this.capIndex == null) {
            this.capIndex = this.txtIndex;
        }

        this.txtIndex += length;
        this.capLength += length;
    },

    logCaptureGroup: function (group, index, length) {
        this.groups.push({ rawIndex: group.rawIndex, slotId: group.packedSlotId, capIndex: index, capLength: length });
    },

    resolveBackref: function (packedSlotId) {
        var groups = this.groups;
        var index = groups.length - 1;

        while (index >= 0) {
            if (groups[index].slotId === packedSlotId) {
                return groups[index];
            }
            --index;
        }

        return null;
    },

    clone: function () {
        var cloned = new System.Text.RegularExpressions.RegexEngineState();
        cloned.txtIndex = this.txtIndex;
        cloned.capIndex = this.capIndex;
        cloned.capLength = this.capLength;


        // Clone passes:
        var clonedPasses = cloned.passes;
        var thisPasses = this.passes;
        var len = thisPasses.length;
        var clonedItem;
        var i;

        for (i = 0; i < len; i++) {
            clonedItem = thisPasses[i].clone();
            clonedPasses.push(clonedItem);
        }

        // Clone groups:
        var clonedGroups = cloned.groups;
        var thisGroups = this.groups;
        len = thisGroups.length;

        for (i = 0; i < len; i++) {
            clonedItem = thisGroups[i];
            clonedGroups.push(clonedItem);
        }


        return cloned;
    }
});
