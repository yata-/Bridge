/* global Bridge */

"use strict";

/* global Bridge */

"use strict";

Bridge.define('Bridge.Test.Assert', {
    statics: {
        assert: null,
        areEqual: function (actual, expected) {
            Bridge.get(Bridge.Test.Assert).assert.deepEqual(actual, expected);
        },
        areEqual$1: function (actual, expected, description) {
            Bridge.get(Bridge.Test.Assert).assert.deepEqual(actual, expected, description);
        },
        areStrictEqual: function (actual, expected) {
            Bridge.get(Bridge.Test.Assert).assert.strictEqual(actual, expected);
        },
        areStrictEqual$1: function (actual, expected, description) {
            Bridge.get(Bridge.Test.Assert).assert.strictEqual(actual, expected, description);
        },
        areNotEqual: function (actual, expected) {
            Bridge.get(Bridge.Test.Assert).assert.notDeepEqual(actual, expected);
        },
        areNotEqual$1: function (actual, expected, description) {
            Bridge.get(Bridge.Test.Assert).assert.notDeepEqual(actual, expected, description);
        },
        $true: function (condition) {
            Bridge.get(Bridge.Test.Assert).assert.ok(condition);
        },
        true$1: function (condition, message) {
            Bridge.get(Bridge.Test.Assert).assert.ok(condition, message);
        },
        $false: function (condition) {
            Bridge.get(Bridge.Test.Assert).assert.notOk(condition);
        },
        false$1: function (condition, message) {
            Bridge.get(Bridge.Test.Assert).assert.notOk(condition, message);
        },
        fail: function () {
            Bridge.get(Bridge.Test.Assert).assert.ok(false);
        },
        fail$1: function (message) {
            Bridge.get(Bridge.Test.Assert).assert.notOk(true, message);
        },
        $throws: function (block) {
            Bridge.get(Bridge.Test.Assert).assert.throws(block, "");
        },
        throws$5: function (block, message) {
            Bridge.get(Bridge.Test.Assert).assert.throws(block, message);
        },
        throws$3: function (block, expected) {
            Bridge.get(Bridge.Test.Assert).assert.throws(block, expected);
        },
        throws$4: function (block, expected, message) {
            Bridge.get(Bridge.Test.Assert).assert.throws(block, expected, message);
        },
        throws$1: function (block, expected) {
            Bridge.get(Bridge.Test.Assert).assert.throws(block, expected);
        },
        throws$2: function (block, expected, message) {
            Bridge.get(Bridge.Test.Assert).assert.throws(block, expected, message);
        },
        $null: function (anObject) {
            Bridge.get(Bridge.Test.Assert).assert.ok(anObject === null);
        },
        null$1: function (anObject, message) {
            Bridge.get(Bridge.Test.Assert).assert.ok(anObject === null, message);
        },
        notNull: function (anObject) {
            Bridge.get(Bridge.Test.Assert).assert.notOk(anObject === null);
        },
        notNull$1: function (anObject, message) {
            Bridge.get(Bridge.Test.Assert).assert.notOk(anObject === null, message);
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).instance = new Bridge.ClientTest.ArrayTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        lengthWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.lengthWorks();
        },
        rankIsOne: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.rankIsOne();
        },
        getLengthWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.getLengthWorks();
        },
        getLowerBound: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.getLowerBound();
        },
        getUpperBoundWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.getUpperBoundWorks();
        },
        gettingValueByIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.gettingValueByIndexWorks();
        },
        getValueWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.getValueWorks();
        },
        settingValueByIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.settingValueByIndexWorks();
        },
        setValueWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.setValueWorks();
        },
        foreachWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.foreachWorks();
        },
        cloneWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.cloneWorks();
        },
        concatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.concatWorks();
        },
        containsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.containsWorks();
        },
        containsUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.containsUsesEqualsMethod();
        },
        allWithArrayItemFilterCallbackWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.allWithArrayItemFilterCallbackWorks();
        },
        sliceWithoutEndWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.sliceWithoutEndWorks();
        },
        foreachWithArrayItemCallbackWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.foreachWithArrayItemCallbackWorks();
        },
        foreachWithArrayCallbackWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.foreachWithArrayCallbackWorks();
        },
        indexOfWithoutStartIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.indexOfWithoutStartIndexWorks();
        },
        indexOfWithoutStartIndexUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.indexOfWithoutStartIndexUsesEqualsMethod();
        },
        indexOfWithStartIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.indexOfWithStartIndexWorks();
        },
        joinWithoutDelimiterWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.joinWithoutDelimiterWorks();
        },
        reverseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.reverseWorks();
        },
        anyWithArrayItemFilterCallbackWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.anyWithArrayItemFilterCallbackWorks();
        },
        binarySearch1Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.binarySearch1Works();
        },
        binarySearch2Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.binarySearch2Works();
        },
        binarySearch3Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.binarySearch3Works();
        },
        binarySearch4Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.binarySearch4Works();
        },
        binarySearchExceptionsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.binarySearchExceptionsWorks();
        },
        sortWithDefaultCompareWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.sortWithDefaultCompareWorks();
        },
        sort1Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.sort1Works();
        },
        sort2Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.sort2Works();
        },
        sort3Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.sort3Works();
        },
        sort4Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.sort4Works();
        },
        sortExceptionsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.sortExceptionsWorks();
        },
        foreachWhenCastToIListWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.foreachWhenCastToIListWorks();
        },
        iCollectionCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.iCollectionCountWorks();
        },
        iCollectionAddWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.iCollectionAddWorks();
        },
        iCollectionClearWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.iCollectionClearWorks();
        },
        iCollectionContainsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.iCollectionContainsWorks();
        },
        iCollectionContainsUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.iCollectionContainsUsesEqualsMethod();
        },
        iCollectionRemoveWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.iCollectionRemoveWorks();
        },
        iListIndexingWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.iListIndexingWorks();
        },
        iListIndexOfWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.iListIndexOfWorks();
        },
        iListIndexOfUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.iListIndexOfUsesEqualsMethod();
        },
        iListInsertWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.iListInsertWorks();
        },
        iListRemoveAtWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.iListRemoveAtWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).instance = new Bridge.ClientTest.Collections.Generic.GenericDictionaryTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        capacityConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.capacityConstructorWorks();
        },
        capacityAndEqualityComparerWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.capacityAndEqualityComparerWorks();
        },
        equalityComparerOnlyConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.equalityComparerOnlyConstructorWorks();
        },
        countWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.countWorks();
        },
        keysWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.keysWorks();
        },
        valuesWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.valuesWorks();
        },
        indexerGetterWorksForExistingItems: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.indexerGetterWorksForExistingItems();
        },
        indexerSetterWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.indexerSetterWorks();
        },
        indexerGetterThrowsForNonExistingItems: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            assert.expect(0);
            t.indexerGetterThrowsForNonExistingItems();
        },
        addWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.addWorks();
        },
        addThrowsIfItemAlreadyExists: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            assert.expect(0);
            t.addThrowsIfItemAlreadyExists();
        },
        clearWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.clearWorks();
        },
        containsKeyWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.containsKeyWorks();
        },
        enumeratingWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.enumeratingWorks();
        },
        removeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.removeWorks();
        },
        tryGetValueWithIntKeysWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.tryGetValueWithIntKeysWorks();
        },
        tryGetValueWithObjectKeysWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.tryGetValueWithObjectKeysWorks();
        },
        canUseCustomComparer: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.canUseCustomComparer();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).instance = new Bridge.ClientTest.Collections.Generic.ICollectionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).getInstance();
            return r;
        },
        arrayImplementsICollection: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.arrayImplementsICollection();
        },
        customClassThatShouldImplementICollectionDoesSo: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.customClassThatShouldImplementICollectionDoesSo();
        },
        arrayCastToICollectionCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.arrayCastToICollectionCountWorks();
        },
        classImplementingICollectionCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.classImplementingICollectionCountWorks();
        },
        classImplementingICollectionCastToICollectionCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.classImplementingICollectionCastToICollectionCountWorks();
        },
        classImplementingICollectionAddWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.classImplementingICollectionAddWorks();
        },
        classImplementingICollectionCastToICollectionAddWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.classImplementingICollectionCastToICollectionAddWorks();
        },
        classImplementingICollectionClearWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.classImplementingICollectionClearWorks();
        },
        classImplementingICollectionCastToICollectionClearWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.classImplementingICollectionCastToICollectionClearWorks();
        },
        arrayCastToICollectionContainsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.arrayCastToICollectionContainsWorks();
        },
        classImplementingICollectionContainsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.classImplementingICollectionContainsWorks();
        },
        classImplementingICollectionCastToICollectionContainsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.classImplementingICollectionCastToICollectionContainsWorks();
        },
        classImplementingICollectionRemoveWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.classImplementingICollectionRemoveWorks();
        },
        classImplementingICollectionCastToICollectionRemoveWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.classImplementingICollectionCastToICollectionRemoveWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).instance = new Bridge.ClientTest.Collections.Generic.IDictionaryTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        classImplementsInterfaces: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).beforeTest(false, assert);
            t.classImplementsInterfaces();
        },
        countWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).beforeTest(false, assert);
            t.countWorks();
        },
        keysWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).beforeTest(false, assert);
            t.keysWorks();
        },
        getItemWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).beforeTest(false, assert);
            t.getItemWorks();
        },
        valuesWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).beforeTest(false, assert);
            t.valuesWorks();
        },
        containsKeyWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).beforeTest(false, assert);
            t.containsKeyWorks();
        },
        tryGetValueWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).beforeTest(false, assert);
            t.tryGetValueWorks();
        },
        addWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).beforeTest(false, assert);
            t.addWorks();
        },
        clearWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).beforeTest(false, assert);
            t.clearWorks();
        },
        removeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).beforeTest(false, assert);
            t.removeWorks();
        },
        setItemWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).beforeTest(false, assert);
            t.setItemWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).instance = new Bridge.ClientTest.Collections.Generic.IEnumerableTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).getInstance();
            return r;
        },
        arrayImplementsIEnumerable: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).beforeTest(false, assert);
            t.arrayImplementsIEnumerable();
        },
        customClassThatShouldImplementIEnumerableDoesSo: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).beforeTest(false, assert);
            t.customClassThatShouldImplementIEnumerableDoesSo();
        },
        arrayGetEnumeratorMethodWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).beforeTest(false, assert);
            t.arrayGetEnumeratorMethodWorks();
        },
        arrayCastToIEnumerableCanBeEnumerated: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).beforeTest(false, assert);
            t.arrayCastToIEnumerableCanBeEnumerated();
        },
        classImplementingIEnumerableCanBeEnumerated: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).beforeTest(false, assert);
            t.classImplementingIEnumerableCanBeEnumerated();
        },
        classImplementingIEnumerableCastToIEnumerableCanBeEnumerated: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).beforeTest(false, assert);
            t.classImplementingIEnumerableCastToIEnumerableCanBeEnumerated();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).instance = new Bridge.ClientTest.Collections.Generic.IListTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        arrayImplementsIList: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.arrayImplementsIList();
        },
        customClassThatShouldImplementIListDoesSo: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.customClassThatShouldImplementIListDoesSo();
        },
        arrayCastToIListGetItemWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.arrayCastToIListGetItemWorks();
        },
        classImplementingIListGetItemWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.classImplementingIListGetItemWorks();
        },
        classImplementingIListCastToIListGetItemWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.classImplementingIListCastToIListGetItemWorks();
        },
        arrayCastToIListSetItemWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.arrayCastToIListSetItemWorks();
        },
        classImplementingIListSetItemWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.classImplementingIListSetItemWorks();
        },
        classImplementingIListCastToIListSetItemWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.classImplementingIListCastToIListSetItemWorks();
        },
        arrayCastToIListIndexOfWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.arrayCastToIListIndexOfWorks();
        },
        classImplementingIListIndexOfWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.classImplementingIListIndexOfWorks();
        },
        classImplementingIListCastToIListIndexOfWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.classImplementingIListCastToIListIndexOfWorks();
        },
        classImplementingIListInsertWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.classImplementingIListInsertWorks();
        },
        classImplementingIListCastToIListInsertWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.classImplementingIListCastToIListInsertWorks();
        },
        classImplementingIListRemoveAtWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.classImplementingIListRemoveAtWorks();
        },
        classImplementingIListCastToIListRemoveAtWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.classImplementingIListCastToIListRemoveAtWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).instance = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).getInstance();
            return r;
        },
        typeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).beforeTest(false, assert);
            t.typeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable();
        },
        enumeratingIEnumeratorIteratorToEndWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).beforeTest(false, assert);
            t.enumeratingIEnumeratorIteratorToEndWorks();
        },
        prematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).beforeTest(false, assert);
            t.prematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks();
        },
        exceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).beforeTest(false, assert);
            t.exceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks();
        },
        typeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).beforeTest(false, assert);
            t.typeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface();
        },
        enumeratingIEnumerableIteratorToEndWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).beforeTest(false, assert);
            t.enumeratingIEnumerableIteratorToEndWorks();
        },
        prematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).beforeTest(false, assert);
            t.prematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks();
        },
        exceptionInIEnumerableIteratorBodyExecutesFinallyBlocks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).beforeTest(false, assert);
            t.exceptionInIEnumerableIteratorBodyExecutesFinallyBlocks();
        },
        enumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).beforeTest(false, assert);
            t.enumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters();
        },
        differentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).beforeTest(false, assert);
            t.differentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).instance = new Bridge.ClientTest.Collections.Generic.ListTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithCapacityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.constructorWithCapacityWorks();
        },
        constructingFromArrayWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.constructingFromArrayWorks();
        },
        constructingFromListWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.constructingFromListWorks();
        },
        constructingFromIEnumerableWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.constructingFromIEnumerableWorks();
        },
        countWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.countWorks();
        },
        indexingWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.indexingWorks();
        },
        foreachWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.foreachWorks();
        },
        getEnumeratorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.getEnumeratorWorks();
        },
        addWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.addWorks();
        },
        addRangeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.addRangeWorks();
        },
        binarySearch1Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.binarySearch1Works();
        },
        binarySearch2Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.binarySearch2Works();
        },
        binarySearch3Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.binarySearch3Works();
        },
        binarySearch4Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.binarySearch4Works();
        },
        clearWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.clearWorks();
        },
        containsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.containsWorks();
        },
        containsUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.containsUsesEqualsMethod();
        },
        sliceWithoutEndWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.sliceWithoutEndWorks();
        },
        sliceWithEndWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.sliceWithEndWorks();
        },
        foreachWithListItemCallbackWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.foreachWithListItemCallbackWorks();
        },
        foreachWithListCallbackWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.foreachWithListCallbackWorks();
        },
        indexOfWithoutStartIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.indexOfWithoutStartIndexWorks();
        },
        indexOfWithoutStartIndexUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.indexOfWithoutStartIndexUsesEqualsMethod();
        },
        indexOfWithStartIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.indexOfWithStartIndexWorks();
        },
        indexOfWithStartIndexUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.indexOfWithStartIndexUsesEqualsMethod();
        },
        insertWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.insertWorks();
        },
        insertRangeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.insertRangeWorks();
        },
        joinWithoutDelimiterWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.joinWithoutDelimiterWorks();
        },
        joinWithDelimiterWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.joinWithDelimiterWorks();
        },
        removeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.removeWorks();
        },
        removeReturnsFalseIfTheElementWasNotFound: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.removeReturnsFalseIfTheElementWasNotFound();
        },
        removeCanRemoveNullItem: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.removeCanRemoveNullItem();
        },
        removeUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.removeUsesEqualsMethod();
        },
        removeAtWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.removeAtWorks();
        },
        removeRangeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.removeRangeWorks();
        },
        reverseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.reverseWorks();
        },
        sortWithDefaultCompareWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.sortWithDefaultCompareWorks();
        },
        sortWithCompareCallbackWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.sortWithCompareCallbackWorks();
        },
        sortWithIComparerWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.sortWithIComparerWorks();
        },
        foreachWhenCastToIEnumerableWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.foreachWhenCastToIEnumerableWorks();
        },
        iEnumerableGetEnumeratorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iEnumerableGetEnumeratorWorks();
        },
        iCollectionCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iCollectionCountWorks();
        },
        iCollectionAddWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iCollectionAddWorks();
        },
        iCollectionClearWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iCollectionClearWorks();
        },
        iCollectionContainsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iCollectionContainsWorks();
        },
        iCollectionContainsUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iCollectionContainsUsesEqualsMethod();
        },
        iCollectionRemoveWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iCollectionRemoveWorks();
        },
        iCollectionRemoveCanRemoveNullItem: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iCollectionRemoveCanRemoveNullItem();
        },
        iCollectionRemoveUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iCollectionRemoveUsesEqualsMethod();
        },
        iListIndexingWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iListIndexingWorks();
        },
        iListIndexOfWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iListIndexOfWorks();
        },
        iListIndexOfUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iListIndexOfUsesEqualsMethod();
        },
        iListInsertWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iListInsertWorks();
        },
        iListRemoveAtWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iListRemoveAtWorks();
        },
        toArrayWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.toArrayWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).instance = new Bridge.ClientTest.MultidimArrayTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        lengthWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).beforeTest(false, assert);
            t.lengthWorks();
        },
        getValueWorksForUninitializedElement: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).beforeTest(false, assert);
            t.getValueWorksForUninitializedElement();
        },
        getValueByIndexWorksForUninitializedElement: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).beforeTest(false, assert);
            t.getValueByIndexWorksForUninitializedElement();
        },
        settingValueByIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).beforeTest(false, assert);
            t.settingValueByIndexWorks();
        },
        setValueWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).beforeTest(false, assert);
            t.setValueWorks();
        },
        getValueWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).beforeTest(false, assert);
            t.getValueWorks();
        },
        gettingValueByIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).beforeTest(false, assert);
            t.gettingValueByIndexWorks();
        },
        rankWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).beforeTest(false, assert);
            t.rankWorks();
        },
        getValueWithIndexOutOfRangeThrowsAnException: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).beforeTest(false, assert);
            t.getValueWithIndexOutOfRangeThrowsAnException();
        },
        setValueWithIndexOutOfRangeThrowsAnException: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).beforeTest(false, assert);
            t.setValueWithIndexOutOfRangeThrowsAnException();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).instance = new Bridge.ClientTest.Collections.Generic.ComparerTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultComparerCanOrderNumbers: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).beforeTest(false, assert);
            t.defaultComparerCanOrderNumbers();
        },
        defaultComparerCanOrderNullValues: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).beforeTest(false, assert);
            t.defaultComparerCanOrderNullValues();
        },
        defaultComparerUsesCompareMethodIfClassImplementsIComparable: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).beforeTest(false, assert);
            t.defaultComparerUsesCompareMethodIfClassImplementsIComparable();
        },
        createWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).beforeTest(false, assert);
            t.createWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests).instance = new Bridge.ClientTest.DateTimeFormatInfoTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        getFormatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests).beforeTest(false, assert);
            t.getFormatWorks();
        },
        invariantWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests).beforeTest(false, assert);
            t.invariantWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).instance = new Bridge.ClientTest.SimpleTypes.JsDateTimeTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorReturnsTodaysDate: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.defaultConstructorReturnsTodaysDate();
        },
        creatingInstanceReturnsTodaysDate: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.creatingInstanceReturnsTodaysDate();
        },
        millisecondSinceEpochConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.millisecondSinceEpochConstructorWorks();
        },
        stringConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.stringConstructorWorks();
        },
        yMDConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.yMDConstructorWorks();
        },
        yMDHConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.yMDHConstructorWorks();
        },
        yMDHNConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.yMDHNConstructorWorks();
        },
        yMDHNSConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.yMDHNSConstructorWorks();
        },
        yMDHNSUConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.yMDHNSUConstructorWorks();
        },
        nowWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.nowWorks();
        },
        uTCNowWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.uTCNowWorks();
        },
        toUniversalWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.toUniversalWorks();
        },
        toLocalWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.toLocalWorks();
        },
        todayWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.todayWorks();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.formatWorks();
        },
        localeFormatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.localeFormatWorks();
        },
        getFullYearWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getFullYearWorks();
        },
        getMonthWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getMonthWorks();
        },
        getDateWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getDateWorks();
        },
        getHoursWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getHoursWorks();
        },
        getMinutesWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getMinutesWorks();
        },
        getSecondsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getSecondsWorks();
        },
        getMillisecondsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getMillisecondsWorks();
        },
        getDayWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getDayWorks();
        },
        getTimeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getTimeWorks();
        },
        valueOfWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.valueOfWorks();
        },
        getTimezoneOffsetWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getTimezoneOffsetWorks();
        },
        getUTCFullYearWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getUTCFullYearWorks();
        },
        getUtcMonthWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getUtcMonthWorks();
        },
        getUTCDateWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getUTCDateWorks();
        },
        getUTCHoursWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getUTCHoursWorks();
        },
        getUTCMinutesWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getUTCMinutesWorks();
        },
        getUTCSecondsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getUTCSecondsWorks();
        },
        getUTCMillisecondsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getUTCMillisecondsWorks();
        },
        getUTCDayWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getUTCDayWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.parseWorks();
        },
        parseExactWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.parseExactWorks();
        },
        parseExactWithCultureWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.parseExactWithCultureWorks();
        },
        parseExactUTCWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.parseExactUTCWorks();
        },
        parseExactUTCWithCultureWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.parseExactUTCWithCultureWorks();
        },
        toDateStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.toDateStringWorks();
        },
        toTimeStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.toTimeStringWorks();
        },
        toUTCStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.toUTCStringWorks();
        },
        toLocaleDateStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.toLocaleDateStringWorks();
        },
        toLocaleTimeStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.toLocaleTimeStringWorks();
        },
        subtractingDatesWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.subtractingDatesWorks();
        },
        subtractMethodReturningTimeSpanWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.subtractMethodReturningTimeSpanWorks();
        },
        dateEqualityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.dateEqualityWorks();
        },
        dateInequalityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.dateInequalityWorks();
        },
        dateLessThanWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.dateLessThanWorks();
        },
        dateLessEqualWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.dateLessEqualWorks();
        },
        dateGreaterThanWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.dateGreaterThanWorks();
        },
        dateGreaterEqualWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.dateGreaterEqualWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.equalsWorks();
        },
        dateTimeEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.dateTimeEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.compareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).instance = new Bridge.ClientTest.SimpleTypes.TimeSpanTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        defaultValueWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.defaultValueWorks();
        },
        zeroWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.zeroWorks();
        },
        creatingInstanceReturnsTimeSpanWithZeroValue: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.creatingInstanceReturnsTimeSpanWithZeroValue();
        },
        parameterConstructorsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.parameterConstructorsWorks();
        },
        factoryMethodsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.factoryMethodsWork();
        },
        propertiesWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.propertiesWork();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.compareToWorks();
        },
        compareWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.compareWorks();
        },
        staticEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.staticEqualsWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.equalsWorks();
        },
        toStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.toStringWorks();
        },
        addWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.addWorks();
        },
        subtractWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.subtractWorks();
        },
        durationWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.durationWorks();
        },
        negateWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.negateWorks();
        },
        comparisonOperatorsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.comparisonOperatorsWork();
        },
        additionOperatorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.additionOperatorWorks();
        },
        subtractionOperatorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.subtractionOperatorWorks();
        },
        unaryPlusWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.unaryPlusWorks();
        },
        unaryMinusWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.unaryMinusWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).instance = new Bridge.ClientTest.DecimalMathTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).getInstance();
            return r;
        },
        testSubtractOperator: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.DecimalMathTests).testSubtractOperator();
        },
        testRemainderOperator: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.DecimalMathTests).testRemainderOperator();
        },
        testMultiplyOperator: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.DecimalMathTests).testMultiplyOperator();
        },
        testDivideOperator: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.DecimalMathTests).testDivideOperator();
        },
        testAddOperator: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.DecimalMathTests).testAddOperator();
        },
        testAddMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.DecimalMathTests).testAddMethod();
        },
        testDivideMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.DecimalMathTests).testDivideMethod();
        },
        testMultiplyMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.DecimalMathTests).testMultiplyMethod();
        },
        testRemainderMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.DecimalMathTests).testRemainderMethod();
        },
        testSubtractMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.DecimalMathTests).testSubtractMethod();
        },
        testCeilingMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.DecimalMathTests).testCeilingMethod();
        },
        testFloorMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.DecimalMathTests).testFloorMethod();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).instance = new Bridge.ClientTest.SimpleTypes.EnumTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        firstValueOfEnumIsZero: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).beforeTest(false, assert);
            t.firstValueOfEnumIsZero();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).beforeTest(false, assert);
            t.equalsWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).instance = new Bridge.ClientTest.Collections.Generic.EqualityComparerTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultComparerCanGetHashCodeOfNumber: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).beforeTest(false, assert);
            t.defaultComparerCanGetHashCodeOfNumber();
        },
        defaultComparerReturnsZeroAsHashCodeForNullAndUndefined: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).beforeTest(false, assert);
            t.defaultComparerReturnsZeroAsHashCodeForNullAndUndefined();
        },
        defaultComparerCanDetermineEquality: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).beforeTest(false, assert);
            t.defaultComparerCanDetermineEquality();
        },
        defaultComparerInvokesOverriddenGetHashCode: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).beforeTest(false, assert);
            t.defaultComparerInvokesOverriddenGetHashCode();
        },
        defaultComparerInvokesOverriddenEquals: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).beforeTest(false, assert);
            t.defaultComparerInvokesOverriddenEquals();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).instance = new Bridge.ClientTest.Exceptions.ArgumentExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        },
        constructorWithMessageAndParamNameWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndParamNameWorks();
        },
        constructorWithMessageAndParamNameAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndParamNameAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).instance = new Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithParamNameWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).beforeTest(false, assert);
            t.constructorWithParamNameWorks();
        },
        constructorWithParamNameAndMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).beforeTest(false, assert);
            t.constructorWithParamNameAndMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).instance = new Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithParamNameWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).beforeTest(false, assert);
            t.constructorWithParamNameWorks();
        },
        constructorWithParamNameAndMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).beforeTest(false, assert);
            t.constructorWithParamNameAndMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        },
        constructorWithParamNameAndActualValueAndMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).beforeTest(false, assert);
            t.constructorWithParamNameAndActualValueAndMessageWorks();
        },
        rangeErrorIsConvertedToArgumentOutOfRangeException: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).beforeTest(false, assert);
            assert.expect(1);
            t.rangeErrorIsConvertedToArgumentOutOfRangeException();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).instance = new Bridge.ClientTest.Exceptions.ArithmeticExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).instance = new Bridge.ClientTest.Exceptions.DivideByZeroExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).instance = new Bridge.ClientTest.Exceptions.ExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        },
        messagePropertyCanBeOverridden: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).beforeTest(false, assert);
            t.messagePropertyCanBeOverridden();
        },
        innerExceptionPropertyCanBeOverridden: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).beforeTest(false, assert);
            t.innerExceptionPropertyCanBeOverridden();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).instance = new Bridge.ClientTest.Exceptions.FormatExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).instance = new Bridge.ClientTest.Exceptions.InvalidCastExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).instance = new Bridge.ClientTest.Exceptions.InvalidOperationExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).instance = new Bridge.ClientTest.Exceptions.KeyNotFoundExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).instance = new Bridge.ClientTest.Exceptions.NotImplementedExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).instance = new Bridge.ClientTest.Exceptions.NotSupportedExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).instance = new Bridge.ClientTest.Exceptions.NullReferenceExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        },
        accessingAFieldOnANullObjectCausesANullReferenceException: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).beforeTest(false, assert);
            assert.expect(1);
            t.accessingAFieldOnANullObjectCausesANullReferenceException();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).instance = new Bridge.ClientTest.Exceptions.OverflowExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests).instance = new Bridge.ClientTest.Exceptions.RankExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests).instance = new Bridge.ClientTest.ExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests).getInstance();
            return r;
        },
        throwingAndCatchingExceptionsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests).beforeTest(false, assert);
            t.throwingAndCatchingExceptionsWorks();
        },
        exceptionOfWrongTypeIsNotCaught: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests).beforeTest(false, assert);
            t.exceptionOfWrongTypeIsNotCaught();
        },
        canCatchExceptionAsBaseType: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests).beforeTest(false, assert);
            t.canCatchExceptionAsBaseType();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).instance = new Bridge.ClientTest.MathTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).getInstance();
            return r;
        },
        constantsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.constantsWork();
        },
        absOfDoubleWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.absOfDoubleWorks();
        },
        absOfIntWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.absOfIntWorks();
        },
        absOfLongWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.absOfLongWorks();
        },
        absOfSbyteWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.absOfSbyteWorks();
        },
        absOfShortWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.absOfShortWorks();
        },
        absOfFloatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.absOfFloatWorks();
        },
        absOfDecimalWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.absOfDecimalWorks();
        },
        acosWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.acosWorks();
        },
        asinWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.asinWorks();
        },
        atanWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.atanWorks();
        },
        atan2Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.atan2Works();
        },
        cosWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.cosWorks();
        },
        divRemWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.divRemWorks();
        },
        expWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.expWorks();
        },
        floorOfDoubleWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.floorOfDoubleWorks();
        },
        floorOfDecimalWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.floorOfDecimalWorks();
        },
        logWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.logWorks();
        },
        maxOfByteWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.maxOfByteWorks();
        },
        maxOfDecimalWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.maxOfDecimalWorks();
        },
        maxOfDoubleWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.maxOfDoubleWorks();
        },
        maxOfShortWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.maxOfShortWorks();
        },
        maxOfIntWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.maxOfIntWorks();
        },
        maxOfLongWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.maxOfLongWorks();
        },
        maxOfSByteWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.maxOfSByteWorks();
        },
        maxOfFloatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.maxOfFloatWorks();
        },
        maxOfUShortWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.maxOfUShortWorks();
        },
        maxOfUIntWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.maxOfUIntWorks();
        },
        maxOfULongWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.maxOfULongWorks();
        },
        minOfByteWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.minOfByteWorks();
        },
        minOfDecimalWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.minOfDecimalWorks();
        },
        minOfDoubleWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.minOfDoubleWorks();
        },
        minOfShortWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.minOfShortWorks();
        },
        minOfIntWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.minOfIntWorks();
        },
        minOfLongWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.minOfLongWorks();
        },
        minOfSByteWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.minOfSByteWorks();
        },
        minOfFloatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.minOfFloatWorks();
        },
        minOfUShortWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.minOfUShortWorks();
        },
        minOfUIntWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.minOfUIntWorks();
        },
        minOfULongWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.minOfULongWorks();
        },
        powWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.powWorks();
        },
        randomWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.randomWorks();
        },
        roundOfDoubleWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.roundOfDoubleWorks();
        },
        roundDecimalWithModeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.roundDecimalWithModeWorks();
        },
        roundDecimalWithPrecisionAndModeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.roundDecimalWithPrecisionAndModeWorks();
        },
        roundDoubleWithModeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.roundDoubleWithModeWorks();
        },
        roundDoubleWithPrecisionAndModeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.roundDoubleWithPrecisionAndModeWorks();
        },
        jsRoundWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.jsRoundWorks();
        },
        iEEERemainderWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.iEEERemainderWorks();
        },
        sinWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.sinWorks();
        },
        sqrtWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.sqrtWorks();
        },
        tanWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.tanWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).instance = new Bridge.ClientTest.NullableTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        convertingToNullableWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.convertingToNullableWorks();
        },
        hasValueWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.hasValueWorks();
        },
        boxingWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.boxingWorks();
        },
        unboxingWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.unboxingWorks();
        },
        valueWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.valueWorks();
        },
        unboxingValueOfWrongTypeThrowsAnException: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.unboxingValueOfWrongTypeThrowsAnException();
        },
        getValueOrDefaultWithArgWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.getValueOrDefaultWithArgWorks();
        },
        liftedEqualityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedEqualityWorks();
        },
        liftedInequalityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedInequalityWorks();
        },
        liftedLessThanWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedLessThanWorks();
        },
        liftedGreaterThanWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedGreaterThanWorks();
        },
        liftedLessThanOrEqualWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedLessThanOrEqualWorks();
        },
        liftedGreaterThanOrEqualWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedGreaterThanOrEqualWorks();
        },
        liftedSubtractionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedSubtractionWorks();
        },
        liftedAdditionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedAdditionWorks();
        },
        liftedModWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedModWorks();
        },
        liftedFloatingPointDivisionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedFloatingPointDivisionWorks();
        },
        liftedIntegerDivisionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedIntegerDivisionWorks();
        },
        liftedMultiplicationWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedMultiplicationWorks();
        },
        liftedBitwiseAndWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedBitwiseAndWorks();
        },
        liftedBitwiseOrWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedBitwiseOrWorks();
        },
        liftedBitwiseXorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedBitwiseXorWorks();
        },
        liftedLeftShiftWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedLeftShiftWorks();
        },
        liftedSignedRightShiftWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedSignedRightShiftWorks();
        },
        liftedUnsignedRightShiftWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedUnsignedRightShiftWorks();
        },
        liftedBooleanAndWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedBooleanAndWorks();
        },
        liftedBooleanOrWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedBooleanOrWorks();
        },
        liftedBooleanNotWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedBooleanNotWorks();
        },
        liftedNegationWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedNegationWorks();
        },
        liftedUnaryPlusWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedUnaryPlusWorks();
        },
        liftedOnesComplementWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedOnesComplementWorks();
        },
        coalesceWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.coalesceWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests).instance = new Bridge.ClientTest.NumberFormatInfoTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        getFormatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests).beforeTest(false, assert);
            t.getFormatWorks();
        },
        invariantWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests).beforeTest(false, assert);
            t.invariantWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).instance = new Bridge.ClientTest.PropertyAccessorTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).getInstance();
            return r;
        },
        accessorsCanBeInvokedInstance: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).beforeTest(false, assert);
            t.accessorsCanBeInvokedInstance();
        },
        accessorsCanBeInvokedStatic: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).beforeTest(false, assert);
            t.accessorsCanBeInvokedStatic();
        },
        accessorsCanBeInvokedGeneric: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).beforeTest(false, assert);
            t.accessorsCanBeInvokedGeneric();
        },
        accessorsCanBeInvokedGenericStatic: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).beforeTest(false, assert);
            t.accessorsCanBeInvokedGenericStatic();
        },
        baseAccessorsCanBeInvoked: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).beforeTest(false, assert);
            t.baseAccessorsCanBeInvoked();
        },
        baseAccessorsCanBeInvokedGeneric: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).beforeTest(false, assert);
            t.baseAccessorsCanBeInvokedGeneric();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).instance = new Bridge.ClientTest.Text.RegularExpressions.RegexTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        stringOnlyConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).beforeTest(false, assert);
            t.stringOnlyConstructorWorks();
        },
        constructorWithFlagsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).beforeTest(false, assert);
            t.constructorWithFlagsWorks();
        },
        globalFlagWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).beforeTest(false, assert);
            t.globalFlagWorks();
        },
        ignoreCaseFlagWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).beforeTest(false, assert);
            t.ignoreCaseFlagWorks();
        },
        multilineFlagWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).beforeTest(false, assert);
            t.multilineFlagWorks();
        },
        patternPropertyWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).beforeTest(false, assert);
            t.patternPropertyWorks();
        },
        sourcePropertyWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).beforeTest(false, assert);
            t.sourcePropertyWorks();
        },
        execWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).beforeTest(false, assert);
            t.execWorks();
        },
        lastIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).beforeTest(false, assert);
            t.lastIndexWorks();
        },
        testWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).beforeTest(false, assert);
            t.testWorks();
        },
        escapeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.Text.RegularExpressions.RegexTests).escapeWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).instance = new Bridge.ClientTest.SimpleTypes.BooleanTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultValueIsFalse: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).beforeTest(false, assert);
            t.defaultValueIsFalse();
        },
        creatingInstanceReturnsFalse: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).beforeTest(false, assert);
            t.creatingInstanceReturnsFalse();
        },
        defaultConstructorReturnsFalse: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).beforeTest(false, assert);
            t.defaultConstructorReturnsFalse();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        objectEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).beforeTest(false, assert);
            t.objectEqualsWorks();
        },
        boolEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).beforeTest(false, assert);
            t.boolEqualsWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).instance = new Bridge.ClientTest.SimpleTypes.ByteTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        castsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.castsWork();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.defaultValueIs0();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        constantsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.constantsWork();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        tryParseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.tryParseWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.parseWorks();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).instance = new Bridge.ClientTest.SimpleTypes.CharTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).getInstance();
            return r;
        },
        typePropertiesAreInt32: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.typePropertiesAreInt32();
        },
        castsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.castsWork();
        },
        defaultValueWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.defaultValueWorks();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        constantsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.constantsWork();
        },
        charComparisonWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.charComparisonWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.parseWorks();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        toStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.toStringWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.compareToWorks();
        },
        isLowerWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.isLowerWorks();
        },
        isUpperWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.isUpperWorks();
        },
        toLowerWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.toLowerWorks();
        },
        toUpperWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.toUpperWorks();
        },
        isDigitWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.isDigitWorks();
        },
        isWhiteSpaceWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.isWhiteSpaceWorks();
        },
        isDigitWithStringAndIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.isDigitWithStringAndIndexWorks();
        },
        isWhiteSpaceWithStringAndIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.isWhiteSpaceWithStringAndIndexWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).instance = new Bridge.ClientTest.SimpleTypes.DecimalTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.defaultValueIs0();
        },
        constantsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.constantsWork();
        },
        convertingConstructorsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.convertingConstructorsWork();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        addWithStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.addWithStringWorks();
        },
        conversionsToDecimalWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.conversionsToDecimalWork();
        },
        conversionsFromDecimalWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.conversionsFromDecimalWork();
        },
        operatorsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.operatorsWork();
        },
        addWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.addWorks();
        },
        ceilingWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.ceilingWorks();
        },
        divideWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.divideWorks();
        },
        floorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.floorWorks();
        },
        remainderWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.remainderWorks();
        },
        multiplyWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.multiplyWorks();
        },
        negateWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.negateWorks();
        },
        roundWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.roundWorks();
        },
        roundWithModeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.roundWithModeWorks();
        },
        subtractWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.subtractWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        objectEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.objectEqualsWorks();
        },
        decimalEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.decimalEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.compareToWorks();
        },
        fullCoalesceWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.fullCoalesceWorks();
        },
        shortCoalesceWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.shortCoalesceWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).instance = new Bridge.ClientTest.SimpleTypes.DoubleTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.defaultValueIs0();
        },
        constantsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.constantsWork();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        toStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.toStringWorks();
        },
        toExponentialWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.toExponentialWorks();
        },
        toExponentialWithFractionalDigitsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.toExponentialWithFractionalDigitsWorks();
        },
        toFixed: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.toFixed();
        },
        toFixedWithFractionalDigitsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.toFixedWithFractionalDigitsWorks();
        },
        toPrecisionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.toPrecisionWorks();
        },
        toPrecisionWithPrecisionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.toPrecisionWithPrecisionWorks();
        },
        isPositiveInfinityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.isPositiveInfinityWorks();
        },
        isNegativeInfinityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.isNegativeInfinityWorks();
        },
        isInfinityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.isInfinityWorks();
        },
        isFiniteWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.isFiniteWorks();
        },
        isNaNWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.isNaNWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        objectEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.objectEqualsWorks();
        },
        doubleEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.doubleEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.compareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).instance = new Bridge.ClientTest.SimpleTypes.Int16Tests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        castsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.castsWork();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.defaultValueIs0();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        constantsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.constantsWork();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        tryParseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.tryParseWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.parseWorks();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).instance = new Bridge.ClientTest.SimpleTypes.Int32Tests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        castsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.castsWork();
        },
        typeIsWorksForInt32: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.typeIsWorksForInt32();
        },
        typeAsWorksForInt32: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.typeAsWorksForInt32();
        },
        unboxingWorksForInt32: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.unboxingWorksForInt32();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.defaultValueIs0();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        constantsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.constantsWork();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        tryParseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.tryParseWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.parseWorks();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.iComparableCompareToWorks();
        },
        integerDivisionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.integerDivisionWorks();
        },
        integerModuloWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.integerModuloWorks();
        },
        integerDivisionByZeroThrowsDivideByZeroException: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.integerDivisionByZeroThrowsDivideByZeroException();
        },
        doublesAreTruncatedWhenConvertedToIntegers: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.doublesAreTruncatedWhenConvertedToIntegers();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).instance = new Bridge.ClientTest.SimpleTypes.Int64Tests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        castsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.castsWork();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.defaultValueIs0();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        tryParseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.tryParseWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.parseWorks();
        },
        castingOfLargeDoublesToInt64Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.castingOfLargeDoublesToInt64Works();
        },
        divisionOfLargeInt64Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.divisionOfLargeInt64Works();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).instance = new Bridge.ClientTest.SimpleTypes.ObjectTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        canGetHashCodeForObject: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).beforeTest(false, assert);
            t.canGetHashCodeForObject();
        },
        repeatedCallsToGetHashCodeReturnsSameValue: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).beforeTest(false, assert);
            t.repeatedCallsToGetHashCodeReturnsSameValue();
        },
        objectIsEqualToItself: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).beforeTest(false, assert);
            t.objectIsEqualToItself();
        },
        objectIsNotEqualToOtherObject: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).beforeTest(false, assert);
            t.objectIsNotEqualToOtherObject();
        },
        staticEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).beforeTest(false, assert);
            t.staticEqualsWorks();
        },
        referenceEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).beforeTest(false, assert);
            t.referenceEqualsWorks();
        },
        toStringOverride: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).beforeTest(false, assert);
            t.toStringOverride();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).instance = new Bridge.ClientTest.SimpleTypes.SByteTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        castsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.castsWork();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.defaultValueIs0();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        constantsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.constantsWork();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        tryParseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.tryParseWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.parseWorks();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).instance = new Bridge.ClientTest.SimpleTypes.SingleTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.defaultValueIs0();
        },
        constantsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.constantsWork();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        toStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.toStringWorks();
        },
        toExponentialWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.toExponentialWorks();
        },
        toExponentialWithFractionalDigitsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.toExponentialWithFractionalDigitsWorks();
        },
        toFixed: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.toFixed();
        },
        toFixedWithFractionalDigitsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.toFixedWithFractionalDigitsWorks();
        },
        toPrecisionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.toPrecisionWorks();
        },
        toPrecisionWithPrecisionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.toPrecisionWithPrecisionWorks();
        },
        isPositiveInfinityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.isPositiveInfinityWorks();
        },
        isNegativeInfinityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.isNegativeInfinityWorks();
        },
        isInfinityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.isInfinityWorks();
        },
        isFiniteWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.isFiniteWorks();
        },
        isNaNWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.isNaNWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.equalsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.compareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).instance = new Bridge.ClientTest.SimpleTypes.TupleTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).getInstance();
            return r;
        },
        tuple1Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).beforeTest(false, assert);
            t.tuple1Works();
        },
        tuple2Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).beforeTest(false, assert);
            t.tuple2Works();
        },
        tuple3Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).beforeTest(false, assert);
            t.tuple3Works();
        },
        tuple4Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).beforeTest(false, assert);
            t.tuple4Works();
        },
        tuple5Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).beforeTest(false, assert);
            t.tuple5Works();
        },
        tuple6Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).beforeTest(false, assert);
            t.tuple6Works();
        },
        tuple7Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).beforeTest(false, assert);
            t.tuple7Works();
        },
        tuple8Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).beforeTest(false, assert);
            t.tuple8Works();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).instance = new Bridge.ClientTest.SimpleTypes.UInt16Tests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        castsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.castsWork();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.defaultValueIs0();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        constantsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.constantsWork();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        tryParseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.tryParseWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.parseWorks();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).instance = new Bridge.ClientTest.SimpleTypes.UInt32Tests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        castsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.castsWork();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.defaultValueIs0();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        constantsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.constantsWork();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        tryParseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.tryParseWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.parseWorks();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).instance = new Bridge.ClientTest.SimpleTypes.UInt64Tests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        castsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.castsWork();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.defaultValueIs0();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        constantsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.constantsWork();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        castingOfLargeValuesToUInt64Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.castingOfLargeValuesToUInt64Works();
        },
        divisionOfLargeUInt64Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.divisionOfLargeUInt64Works();
        },
        tryParseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.tryParseWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.parseWorks();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).instance = new Bridge.ClientTest.SimpleTypes.StringTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        copyConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.copyConstructorWorks();
        },
        charAndCountConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.charAndCountConstructorWorks();
        },
        charArrayConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.charArrayConstructorWorks();
        },
        emptyFieldWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.emptyFieldWorks();
        },
        lengthPropertyWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.lengthPropertyWorks();
        },
        charAtWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.charAtWorks();
        },
        charCodeAtWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.charCodeAtWorks();
        },
        compareWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.compareWorks();
        },
        compareWithIgnoreCaseArgWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.compareWithIgnoreCaseArgWorks();
        },
        concatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.concatWorks();
        },
        concatWithObjectsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.concatWithObjectsWorks();
        },
        endsWithCharWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.endsWithCharWorks();
        },
        endsWithStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.endsWithStringWorks();
        },
        staticEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.staticEqualsWorks();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.formatWorks();
        },
        formatWorksWithIFormattable: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.formatWorksWithIFormattable();
        },
        formatCanUseEscapedBraces: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.formatCanUseEscapedBraces();
        },
        fromCharCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.fromCharCodeWorks();
        },
        indexOfCharWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.indexOfCharWorks();
        },
        indexOfStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.indexOfStringWorks();
        },
        indexOfCharWithStartIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.indexOfCharWithStartIndexWorks();
        },
        indexOfCharWithStartIndexAndCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.indexOfCharWithStartIndexAndCountWorks();
        },
        indexOfStringWithStartIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.indexOfStringWithStartIndexWorks();
        },
        indexOfStringWithStartIndexAndCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.indexOfStringWithStartIndexAndCountWorks();
        },
        indexOfAnyWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.indexOfAnyWorks();
        },
        indexOfAnyWithStartIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.indexOfAnyWithStartIndexWorks();
        },
        indexOfAnyWithStartIndexAndCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.indexOfAnyWithStartIndexAndCountWorks();
        },
        insertWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.insertWorks();
        },
        isNullOrEmptyWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.isNullOrEmptyWorks();
        },
        lastIndexOfCharWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.lastIndexOfCharWorks();
        },
        lastIndexOfStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.lastIndexOfStringWorks();
        },
        lastIndexOfCharWithStartIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.lastIndexOfCharWithStartIndexWorks();
        },
        lastIndexOfStringWithStartIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.lastIndexOfStringWithStartIndexWorks();
        },
        lastIndexOfCharWithStartIndexAndCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.lastIndexOfCharWithStartIndexAndCountWorks();
        },
        lastIndexOfStringWithStartIndexAndCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.lastIndexOfStringWithStartIndexAndCountWorks();
        },
        lastIndexOfAnyWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.lastIndexOfAnyWorks();
        },
        lastIndexOfAnyWithStartIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.lastIndexOfAnyWithStartIndexWorks();
        },
        lastIndexOfAnyWithStartIndexAndCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.lastIndexOfAnyWithStartIndexAndCountWorks();
        },
        localeCompareWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.localeCompareWorks();
        },
        matchWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.matchWorks();
        },
        padLeftWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.padLeftWorks();
        },
        padLeftWithCharWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.padLeftWithCharWorks();
        },
        padRightWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.padRightWorks();
        },
        padRightWithCharWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.padRightWithCharWorks();
        },
        removeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.removeWorks();
        },
        removeWithCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.removeWithCountWorks();
        },
        replaceWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.replaceWorks();
        },
        replaceCharWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.replaceCharWorks();
        },
        replaceRegexWithReplaceTextWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.replaceRegexWithReplaceTextWorks();
        },
        replaceRegexWithReplaceCallbackWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.replaceRegexWithReplaceCallbackWorks();
        },
        searchWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.searchWorks();
        },
        sliceWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.sliceWorks();
        },
        splitWithStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.splitWithStringWorks();
        },
        splitWithCharWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.splitWithCharWorks();
        },
        jsSplitWithStringAndLimitWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.jsSplitWithStringAndLimitWorks();
        },
        jsSplitWithCharAndLimitWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.jsSplitWithCharAndLimitWorks();
        },
        splitWithCharsAndLimitWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.splitWithCharsAndLimitWorks();
        },
        splitWithCharsAndStringSplitOptionsAndLimitWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.splitWithCharsAndStringSplitOptionsAndLimitWorks();
        },
        splitWithRegexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.splitWithRegexWorks();
        },
        someNetSplitTests: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.someNetSplitTests();
        },
        splitWithCharsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.splitWithCharsWorks();
        },
        splitWithStringsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.splitWithStringsWorks();
        },
        splitWithStringsAndLimitWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.splitWithStringsAndLimitWorks();
        },
        startsWithCharWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.startsWithCharWorks();
        },
        startsWithStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.startsWithStringWorks();
        },
        substrWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.substrWorks();
        },
        substringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.substringWorks();
        },
        jsSubstringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.jsSubstringWorks();
        },
        toLowerCaseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.toLowerCaseWorks();
        },
        toUpperCaseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.toUpperCaseWorks();
        },
        toLowerWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.toLowerWorks();
        },
        toUpperWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.toUpperWorks();
        },
        trimWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.trimWorks();
        },
        trimCharsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.trimCharsWorks();
        },
        trimStartCharsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.trimStartCharsWorks();
        },
        trimEndCharsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.trimEndCharsWorks();
        },
        trimStartWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.trimStartWorks();
        },
        trimEndWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.trimEndWorks();
        },
        stringEqualityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.stringEqualityWorks();
        },
        stringInequalityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.stringInequalityWorks();
        },
        stringIndexingWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.stringIndexingWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        instanceEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.instanceEqualsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        stringEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.stringEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.iComparableCompareToWorks();
        },
        joinWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.joinWorks();
        },
        containsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.containsWorks();
        },
        toCharArrayWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.toCharArrayWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).instance = new Bridge.ClientTest.Text.StringBuilderTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithCapacityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.constructorWithCapacityWorks();
        },
        initialTextConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.initialTextConstructorWorks();
        },
        initialTextConstructorWithCapacityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.initialTextConstructorWithCapacityWorks();
        },
        substringConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.substringConstructorWorks();
        },
        appendBoolWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.appendBoolWorks();
        },
        appendCharWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.appendCharWorks();
        },
        appendIntWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.appendIntWorks();
        },
        appendDoubleWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.appendDoubleWorks();
        },
        appendObjectWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.appendObjectWorks();
        },
        appendStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.appendStringWorks();
        },
        appendLineWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.appendLineWorks();
        },
        appendLineStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.appendLineStringWorks();
        },
        clearWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.clearWorks();
        },
        toStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.toStringWorks();
        },
        lengthPropertyWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.lengthPropertyWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests).instance = new Bridge.ClientTest.EnvironmentTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests).getInstance();
            return r;
        },
        newLineIsAStringContainingOnlyTheNewLineChar: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests).beforeTest(false, assert);
            t.newLineIsAStringContainingOnlyTheNewLineChar();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests).instance = new Bridge.ClientTest.CultureInfoTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        getFormatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests).beforeTest(false, assert);
            t.getFormatWorks();
        },
        invariantWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests).beforeTest(false, assert);
            t.invariantWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIComparableTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIComparableTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIComparableTests).instance = new Bridge.ClientTest.IComparableTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIComparableTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIComparableTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIComparableTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIComparableTests).getInstance();
            return r;
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIEquatableTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIEquatableTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIEquatableTests).instance = new Bridge.ClientTest.IEquatableTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIEquatableTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIEquatableTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIEquatableTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIEquatableTests).getInstance();
            return r;
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests', {
    statics: {
        config: {
            init: function () {
                Bridge.ready(this.run);
            }
        },
        run: function () {
            Bridge.get(QUnit).module("Collections");
            Bridge.get(QUnit).test("Array - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("Array - LengthWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).lengthWorks);
            Bridge.get(QUnit).test("Array - RankIsOne", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).rankIsOne);
            Bridge.get(QUnit).test("Array - GetLengthWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).getLengthWorks);
            Bridge.get(QUnit).test("Array - GetLowerBound", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).getLowerBound);
            Bridge.get(QUnit).test("Array - GetUpperBoundWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).getUpperBoundWorks);
            Bridge.get(QUnit).test("Array - GettingValueByIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).gettingValueByIndexWorks);
            Bridge.get(QUnit).test("Array - GetValueWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).getValueWorks);
            Bridge.get(QUnit).test("Array - SettingValueByIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).settingValueByIndexWorks);
            Bridge.get(QUnit).test("Array - SetValueWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).setValueWorks);
            Bridge.get(QUnit).test("Array - ForeachWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).foreachWorks);
            Bridge.get(QUnit).test("Array - CloneWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).cloneWorks);
            Bridge.get(QUnit).test("Array - ConcatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).concatWorks);
            Bridge.get(QUnit).test("Array - ContainsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).containsWorks);
            Bridge.get(QUnit).test("Array - ContainsUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).containsUsesEqualsMethod);
            Bridge.get(QUnit).test("Array - AllWithArrayItemFilterCallbackWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).allWithArrayItemFilterCallbackWorks);
            Bridge.get(QUnit).test("Array - SliceWithoutEndWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).sliceWithoutEndWorks);
            Bridge.get(QUnit).test("Array - ForeachWithArrayItemCallbackWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).foreachWithArrayItemCallbackWorks);
            Bridge.get(QUnit).test("Array - ForeachWithArrayCallbackWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).foreachWithArrayCallbackWorks);
            Bridge.get(QUnit).test("Array - IndexOfWithoutStartIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).indexOfWithoutStartIndexWorks);
            Bridge.get(QUnit).test("Array - IndexOfWithoutStartIndexUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).indexOfWithoutStartIndexUsesEqualsMethod);
            Bridge.get(QUnit).test("Array - IndexOfWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).indexOfWithStartIndexWorks);
            Bridge.get(QUnit).test("Array - JoinWithoutDelimiterWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).joinWithoutDelimiterWorks);
            Bridge.get(QUnit).test("Array - ReverseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).reverseWorks);
            Bridge.get(QUnit).test("Array - AnyWithArrayItemFilterCallbackWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).anyWithArrayItemFilterCallbackWorks);
            Bridge.get(QUnit).test("Array - BinarySearch1Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).binarySearch1Works);
            Bridge.get(QUnit).test("Array - BinarySearch2Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).binarySearch2Works);
            Bridge.get(QUnit).test("Array - BinarySearch3Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).binarySearch3Works);
            Bridge.get(QUnit).test("Array - BinarySearch4Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).binarySearch4Works);
            Bridge.get(QUnit).test("Array - BinarySearchExceptionsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).binarySearchExceptionsWorks);
            Bridge.get(QUnit).test("Array - SortWithDefaultCompareWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).sortWithDefaultCompareWorks);
            Bridge.get(QUnit).test("Array - Sort1Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).sort1Works);
            Bridge.get(QUnit).test("Array - Sort2Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).sort2Works);
            Bridge.get(QUnit).test("Array - Sort3Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).sort3Works);
            Bridge.get(QUnit).test("Array - Sort4Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).sort4Works);
            Bridge.get(QUnit).test("Array - SortExceptionsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).sortExceptionsWorks);
            Bridge.get(QUnit).test("Array - ForeachWhenCastToIListWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).foreachWhenCastToIListWorks);
            Bridge.get(QUnit).test("Array - ICollectionCountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).iCollectionCountWorks);
            Bridge.get(QUnit).test("Array - ICollectionAddWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).iCollectionAddWorks);
            Bridge.get(QUnit).test("Array - ICollectionClearWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).iCollectionClearWorks);
            Bridge.get(QUnit).test("Array - ICollectionContainsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).iCollectionContainsWorks);
            Bridge.get(QUnit).test("Array - ICollectionContainsUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).iCollectionContainsUsesEqualsMethod);
            Bridge.get(QUnit).test("Array - ICollectionRemoveWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).iCollectionRemoveWorks);
            Bridge.get(QUnit).test("Array - IListIndexingWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).iListIndexingWorks);
            Bridge.get(QUnit).test("Array - IListIndexOfWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).iListIndexOfWorks);
            Bridge.get(QUnit).test("Array - IListIndexOfUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).iListIndexOfUsesEqualsMethod);
            Bridge.get(QUnit).test("Array - IListInsertWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).iListInsertWorks);
            Bridge.get(QUnit).test("Array - IListRemoveAtWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).iListRemoveAtWorks);
            Bridge.get(QUnit).test("GenericDictionary - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("GenericDictionary - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).defaultConstructorWorks);
            Bridge.get(QUnit).test("GenericDictionary - CapacityConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).capacityConstructorWorks);
            Bridge.get(QUnit).test("GenericDictionary - CapacityAndEqualityComparerWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).capacityAndEqualityComparerWorks);
            Bridge.get(QUnit).test("GenericDictionary - EqualityComparerOnlyConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).equalityComparerOnlyConstructorWorks);
            Bridge.get(QUnit).test("GenericDictionary - CountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).countWorks);
            Bridge.get(QUnit).test("GenericDictionary - KeysWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).keysWorks);
            Bridge.get(QUnit).test("GenericDictionary - ValuesWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).valuesWorks);
            Bridge.get(QUnit).test("GenericDictionary - IndexerGetterWorksForExistingItems", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).indexerGetterWorksForExistingItems);
            Bridge.get(QUnit).test("GenericDictionary - IndexerSetterWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).indexerSetterWorks);
            Bridge.get(QUnit).test("GenericDictionary - IndexerGetterThrowsForNonExistingItems", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).indexerGetterThrowsForNonExistingItems);
            Bridge.get(QUnit).test("GenericDictionary - AddWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).addWorks);
            Bridge.get(QUnit).test("GenericDictionary - AddThrowsIfItemAlreadyExists", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).addThrowsIfItemAlreadyExists);
            Bridge.get(QUnit).test("GenericDictionary - ClearWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).clearWorks);
            Bridge.get(QUnit).test("GenericDictionary - ContainsKeyWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).containsKeyWorks);
            Bridge.get(QUnit).test("GenericDictionary - EnumeratingWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).enumeratingWorks);
            Bridge.get(QUnit).test("GenericDictionary - RemoveWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).removeWorks);
            Bridge.get(QUnit).test("GenericDictionary - TryGetValueWithIntKeysWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).tryGetValueWithIntKeysWorks);
            Bridge.get(QUnit).test("GenericDictionary - TryGetValueWithObjectKeysWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).tryGetValueWithObjectKeysWorks);
            Bridge.get(QUnit).test("GenericDictionary - CanUseCustomComparer", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).canUseCustomComparer);
            Bridge.get(QUnit).test("ICollection - ArrayImplementsICollection", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).arrayImplementsICollection);
            Bridge.get(QUnit).test("ICollection - CustomClassThatShouldImplementICollectionDoesSo", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).customClassThatShouldImplementICollectionDoesSo);
            Bridge.get(QUnit).test("ICollection - ArrayCastToICollectionCountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).arrayCastToICollectionCountWorks);
            Bridge.get(QUnit).test("ICollection - ClassImplementingICollectionCountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).classImplementingICollectionCountWorks);
            Bridge.get(QUnit).test("ICollection - ClassImplementingICollectionCastToICollectionCountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).classImplementingICollectionCastToICollectionCountWorks);
            Bridge.get(QUnit).test("ICollection - ClassImplementingICollectionAddWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).classImplementingICollectionAddWorks);
            Bridge.get(QUnit).test("ICollection - ClassImplementingICollectionCastToICollectionAddWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).classImplementingICollectionCastToICollectionAddWorks);
            Bridge.get(QUnit).test("ICollection - ClassImplementingICollectionClearWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).classImplementingICollectionClearWorks);
            Bridge.get(QUnit).test("ICollection - ClassImplementingICollectionCastToICollectionClearWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).classImplementingICollectionCastToICollectionClearWorks);
            Bridge.get(QUnit).test("ICollection - ArrayCastToICollectionContainsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).arrayCastToICollectionContainsWorks);
            Bridge.get(QUnit).test("ICollection - ClassImplementingICollectionContainsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).classImplementingICollectionContainsWorks);
            Bridge.get(QUnit).test("ICollection - ClassImplementingICollectionCastToICollectionContainsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).classImplementingICollectionCastToICollectionContainsWorks);
            Bridge.get(QUnit).test("ICollection - ClassImplementingICollectionRemoveWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).classImplementingICollectionRemoveWorks);
            Bridge.get(QUnit).test("ICollection - ClassImplementingICollectionCastToICollectionRemoveWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).classImplementingICollectionCastToICollectionRemoveWorks);
            Bridge.get(QUnit).test("IDictionary - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("IDictionary - ClassImplementsInterfaces", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).classImplementsInterfaces);
            Bridge.get(QUnit).test("IDictionary - CountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).countWorks);
            Bridge.get(QUnit).test("IDictionary - KeysWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).keysWorks);
            Bridge.get(QUnit).test("IDictionary - GetItemWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).getItemWorks);
            Bridge.get(QUnit).test("IDictionary - ValuesWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).valuesWorks);
            Bridge.get(QUnit).test("IDictionary - ContainsKeyWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).containsKeyWorks);
            Bridge.get(QUnit).test("IDictionary - TryGetValueWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).tryGetValueWorks);
            Bridge.get(QUnit).test("IDictionary - AddWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).addWorks);
            Bridge.get(QUnit).test("IDictionary - ClearWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).clearWorks);
            Bridge.get(QUnit).test("IDictionary - RemoveWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).removeWorks);
            Bridge.get(QUnit).test("IDictionary - SetItemWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).setItemWorks);
            Bridge.get(QUnit).test("IEnumerable - ArrayImplementsIEnumerable", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).arrayImplementsIEnumerable);
            Bridge.get(QUnit).test("IEnumerable - CustomClassThatShouldImplementIEnumerableDoesSo", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).customClassThatShouldImplementIEnumerableDoesSo);
            Bridge.get(QUnit).test("IEnumerable - ArrayGetEnumeratorMethodWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).arrayGetEnumeratorMethodWorks);
            Bridge.get(QUnit).test("IEnumerable - ArrayCastToIEnumerableCanBeEnumerated", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).arrayCastToIEnumerableCanBeEnumerated);
            Bridge.get(QUnit).test("IEnumerable - ClassImplementingIEnumerableCanBeEnumerated", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).classImplementingIEnumerableCanBeEnumerated);
            Bridge.get(QUnit).test("IEnumerable - ClassImplementingIEnumerableCastToIEnumerableCanBeEnumerated", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).classImplementingIEnumerableCastToIEnumerableCanBeEnumerated);
            Bridge.get(QUnit).test("IList - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("IList - ArrayImplementsIList", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).arrayImplementsIList);
            Bridge.get(QUnit).test("IList - CustomClassThatShouldImplementIListDoesSo", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).customClassThatShouldImplementIListDoesSo);
            Bridge.get(QUnit).test("IList - ArrayCastToIListGetItemWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).arrayCastToIListGetItemWorks);
            Bridge.get(QUnit).test("IList - ClassImplementingIListGetItemWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).classImplementingIListGetItemWorks);
            Bridge.get(QUnit).test("IList - ClassImplementingIListCastToIListGetItemWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).classImplementingIListCastToIListGetItemWorks);
            Bridge.get(QUnit).test("IList - ArrayCastToIListSetItemWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).arrayCastToIListSetItemWorks);
            Bridge.get(QUnit).test("IList - ClassImplementingIListSetItemWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).classImplementingIListSetItemWorks);
            Bridge.get(QUnit).test("IList - ClassImplementingIListCastToIListSetItemWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).classImplementingIListCastToIListSetItemWorks);
            Bridge.get(QUnit).test("IList - ArrayCastToIListIndexOfWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).arrayCastToIListIndexOfWorks);
            Bridge.get(QUnit).test("IList - ClassImplementingIListIndexOfWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).classImplementingIListIndexOfWorks);
            Bridge.get(QUnit).test("IList - ClassImplementingIListCastToIListIndexOfWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).classImplementingIListCastToIListIndexOfWorks);
            Bridge.get(QUnit).test("IList - ClassImplementingIListInsertWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).classImplementingIListInsertWorks);
            Bridge.get(QUnit).test("IList - ClassImplementingIListCastToIListInsertWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).classImplementingIListCastToIListInsertWorks);
            Bridge.get(QUnit).test("IList - ClassImplementingIListRemoveAtWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).classImplementingIListRemoveAtWorks);
            Bridge.get(QUnit).test("IList - ClassImplementingIListCastToIListRemoveAtWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).classImplementingIListCastToIListRemoveAtWorks);
            Bridge.get(QUnit).test("IteratorBlock - TypeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).typeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable);
            Bridge.get(QUnit).test("IteratorBlock - EnumeratingIEnumeratorIteratorToEndWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).enumeratingIEnumeratorIteratorToEndWorks);
            Bridge.get(QUnit).test("IteratorBlock - PrematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).prematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks);
            Bridge.get(QUnit).test("IteratorBlock - ExceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks Exception thrown not caught", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).exceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks);
            Bridge.get(QUnit).test("IteratorBlock - TypeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).typeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface);
            Bridge.get(QUnit).test("IteratorBlock - EnumeratingIEnumerableIteratorToEndWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).enumeratingIEnumerableIteratorToEndWorks);
            Bridge.get(QUnit).test("IteratorBlock - PrematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).prematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks);
            Bridge.get(QUnit).test("IteratorBlock - ExceptionInIEnumerableIteratorBodyExecutesFinallyBlocks exception thrown not caught", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).exceptionInIEnumerableIteratorBodyExecutesFinallyBlocks);
            Bridge.get(QUnit).test("IteratorBlock - EnumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).enumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters);
            Bridge.get(QUnit).test("IteratorBlock - DifferentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).differentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals);
            Bridge.get(QUnit).test("List - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("List - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).defaultConstructorWorks);
            Bridge.get(QUnit).test("List - ConstructorWithCapacityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).constructorWithCapacityWorks);
            Bridge.get(QUnit).test("List - ConstructingFromArrayWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).constructingFromArrayWorks);
            Bridge.get(QUnit).test("List - ConstructingFromListWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).constructingFromListWorks);
            Bridge.get(QUnit).test("List - ConstructingFromIEnumerableWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).constructingFromIEnumerableWorks);
            Bridge.get(QUnit).test("List - CountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).countWorks);
            Bridge.get(QUnit).test("List - IndexingWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).indexingWorks);
            Bridge.get(QUnit).test("List - ForeachWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).foreachWorks);
            Bridge.get(QUnit).test("List - GetEnumeratorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).getEnumeratorWorks);
            Bridge.get(QUnit).test("List - AddWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).addWorks);
            Bridge.get(QUnit).test("List - AddRangeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).addRangeWorks);
            Bridge.get(QUnit).test("List - BinarySearch1Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).binarySearch1Works);
            Bridge.get(QUnit).test("List - BinarySearch2Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).binarySearch2Works);
            Bridge.get(QUnit).test("List - BinarySearch3Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).binarySearch3Works);
            Bridge.get(QUnit).test("List - BinarySearch4Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).binarySearch4Works);
            Bridge.get(QUnit).test("List - ClearWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).clearWorks);
            Bridge.get(QUnit).test("List - ContainsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).containsWorks);
            Bridge.get(QUnit).test("List - ContainsUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).containsUsesEqualsMethod);
            Bridge.get(QUnit).test("List - SliceWithoutEndWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).sliceWithoutEndWorks);
            Bridge.get(QUnit).test("List - SliceWithEndWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).sliceWithEndWorks);
            Bridge.get(QUnit).test("List - ForeachWithListItemCallbackWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).foreachWithListItemCallbackWorks);
            Bridge.get(QUnit).test("List - ForeachWithListCallbackWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).foreachWithListCallbackWorks);
            Bridge.get(QUnit).test("List - IndexOfWithoutStartIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).indexOfWithoutStartIndexWorks);
            Bridge.get(QUnit).test("List - IndexOfWithoutStartIndexUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).indexOfWithoutStartIndexUsesEqualsMethod);
            Bridge.get(QUnit).test("List - IndexOfWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).indexOfWithStartIndexWorks);
            Bridge.get(QUnit).test("List - IndexOfWithStartIndexUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).indexOfWithStartIndexUsesEqualsMethod);
            Bridge.get(QUnit).test("List - InsertWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).insertWorks);
            Bridge.get(QUnit).test("List - InsertRangeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).insertRangeWorks);
            Bridge.get(QUnit).test("List - JoinWithoutDelimiterWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).joinWithoutDelimiterWorks);
            Bridge.get(QUnit).test("List - JoinWithDelimiterWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).joinWithDelimiterWorks);
            Bridge.get(QUnit).test("List - RemoveWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).removeWorks);
            Bridge.get(QUnit).test("List - RemoveReturnsFalseIfTheElementWasNotFound", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).removeReturnsFalseIfTheElementWasNotFound);
            Bridge.get(QUnit).test("List - RemoveCanRemoveNullItem", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).removeCanRemoveNullItem);
            Bridge.get(QUnit).test("List - RemoveUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).removeUsesEqualsMethod);
            Bridge.get(QUnit).test("List - RemoveAtWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).removeAtWorks);
            Bridge.get(QUnit).test("List - RemoveRangeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).removeRangeWorks);
            Bridge.get(QUnit).test("List - ReverseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).reverseWorks);
            Bridge.get(QUnit).test("List - SortWithDefaultCompareWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).sortWithDefaultCompareWorks);
            Bridge.get(QUnit).test("List - SortWithCompareCallbackWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).sortWithCompareCallbackWorks);
            Bridge.get(QUnit).test("List - SortWithIComparerWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).sortWithIComparerWorks);
            Bridge.get(QUnit).test("List - ForeachWhenCastToIEnumerableWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).foreachWhenCastToIEnumerableWorks);
            Bridge.get(QUnit).test("List - IEnumerableGetEnumeratorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iEnumerableGetEnumeratorWorks);
            Bridge.get(QUnit).test("List - ICollectionCountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iCollectionCountWorks);
            Bridge.get(QUnit).test("List - ICollectionAddWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iCollectionAddWorks);
            Bridge.get(QUnit).test("List - ICollectionClearWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iCollectionClearWorks);
            Bridge.get(QUnit).test("List - ICollectionContainsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iCollectionContainsWorks);
            Bridge.get(QUnit).test("List - ICollectionContainsUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iCollectionContainsUsesEqualsMethod);
            Bridge.get(QUnit).test("List - ICollectionRemoveWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iCollectionRemoveWorks);
            Bridge.get(QUnit).test("List - ICollectionRemoveCanRemoveNullItem", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iCollectionRemoveCanRemoveNullItem);
            Bridge.get(QUnit).test("List - ICollectionRemoveUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iCollectionRemoveUsesEqualsMethod);
            Bridge.get(QUnit).test("List - IListIndexingWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iListIndexingWorks);
            Bridge.get(QUnit).test("List - IListIndexOfWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iListIndexOfWorks);
            Bridge.get(QUnit).test("List - IListIndexOfUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iListIndexOfUsesEqualsMethod);
            Bridge.get(QUnit).test("List - IListInsertWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iListInsertWorks);
            Bridge.get(QUnit).test("List - IListRemoveAtWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iListRemoveAtWorks);
            Bridge.get(QUnit).test("List - ToArrayWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).toArrayWorks);
            Bridge.get(QUnit).test("MultidimArray - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("MultidimArray - LengthWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).lengthWorks);
            Bridge.get(QUnit).test("MultidimArray - GetValueWorksForUninitializedElement", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).getValueWorksForUninitializedElement);
            Bridge.get(QUnit).test("MultidimArray - GetValueByIndexWorksForUninitializedElement", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).getValueByIndexWorksForUninitializedElement);
            Bridge.get(QUnit).test("MultidimArray - SettingValueByIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).settingValueByIndexWorks);
            Bridge.get(QUnit).test("MultidimArray - SetValueWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).setValueWorks);
            Bridge.get(QUnit).test("MultidimArray - GetValueWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).getValueWorks);
            Bridge.get(QUnit).test("MultidimArray - GettingValueByIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).gettingValueByIndexWorks);
            Bridge.get(QUnit).test("MultidimArray - RankWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).rankWorks);
            Bridge.get(QUnit).test("MultidimArray - GetValueWithIndexOutOfRangeThrowsAnException", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).getValueWithIndexOutOfRangeThrowsAnException);
            Bridge.get(QUnit).test("MultidimArray - SetValueWithIndexOutOfRangeThrowsAnException", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).setValueWithIndexOutOfRangeThrowsAnException);
            Bridge.get(QUnit).module("Comparer");
            Bridge.get(QUnit).test("TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("DefaultComparerCanOrderNumbers", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).defaultComparerCanOrderNumbers);
            Bridge.get(QUnit).test("DefaultComparerCanOrderNullValues", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).defaultComparerCanOrderNullValues);
            Bridge.get(QUnit).test("DefaultComparerUsesCompareMethodIfClassImplementsIComparable", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).defaultComparerUsesCompareMethodIfClassImplementsIComparable);
            Bridge.get(QUnit).test("CreateWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).createWorks);
            Bridge.get(QUnit).module("Date and time");
            Bridge.get(QUnit).test("DateTimeFormatInfo - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("DateTimeFormatInfo - GetFormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests).getFormatWorks);
            Bridge.get(QUnit).test("DateTimeFormatInfo - InvariantWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests).invariantWorks);
            Bridge.get(QUnit).test("DateTime - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("DateTime - DefaultConstructorReturnsTodaysDate", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).defaultConstructorReturnsTodaysDate);
            Bridge.get(QUnit).test("DateTime - CreatingInstanceReturnsTodaysDate", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).creatingInstanceReturnsTodaysDate);
            Bridge.get(QUnit).test("DateTime - MillisecondSinceEpochConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).millisecondSinceEpochConstructorWorks);
            Bridge.get(QUnit).test("DateTime - StringConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).stringConstructorWorks);
            Bridge.get(QUnit).test("DateTime - YMDConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).yMDConstructorWorks);
            Bridge.get(QUnit).test("DateTime - YMDHConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).yMDHConstructorWorks);
            Bridge.get(QUnit).test("DateTime - YMDHNConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).yMDHNConstructorWorks);
            Bridge.get(QUnit).test("DateTime - YMDHNSConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).yMDHNSConstructorWorks);
            Bridge.get(QUnit).test("DateTime - YMDHNSUConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).yMDHNSUConstructorWorks);
            Bridge.get(QUnit).test("DateTime - NowWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).nowWorks);
            Bridge.get(QUnit).test("DateTime - UTCNowWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).uTCNowWorks);
            Bridge.get(QUnit).test("DateTime - ToUniversalWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).toUniversalWorks);
            Bridge.get(QUnit).test("DateTime - ToLocalWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).toLocalWorks);
            Bridge.get(QUnit).test("DateTime - TodayWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).todayWorks);
            Bridge.get(QUnit).test("DateTime - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).formatWorks);
            Bridge.get(QUnit).test("DateTime - LocaleFormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).localeFormatWorks);
            Bridge.get(QUnit).test("DateTime - GetFullYearWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getFullYearWorks);
            Bridge.get(QUnit).test("DateTime - GetMonthWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getMonthWorks);
            Bridge.get(QUnit).test("DateTime - GetDateWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getDateWorks);
            Bridge.get(QUnit).test("DateTime - GetHoursWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getHoursWorks);
            Bridge.get(QUnit).test("DateTime - GetMinutesWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getMinutesWorks);
            Bridge.get(QUnit).test("DateTime - GetSecondsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getSecondsWorks);
            Bridge.get(QUnit).test("DateTime - GetMillisecondsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getMillisecondsWorks);
            Bridge.get(QUnit).test("DateTime - GetDayWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getDayWorks);
            Bridge.get(QUnit).test("DateTime - GetTimeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getTimeWorks);
            Bridge.get(QUnit).test("DateTime - ValueOfWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).valueOfWorks);
            Bridge.get(QUnit).test("DateTime - GetTimezoneOffsetWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getTimezoneOffsetWorks);
            Bridge.get(QUnit).test("DateTime - GetUTCFullYearWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getUTCFullYearWorks);
            Bridge.get(QUnit).test("DateTime - GetUtcMonthWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getUtcMonthWorks);
            Bridge.get(QUnit).test("DateTime - GetUTCDateWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getUTCDateWorks);
            Bridge.get(QUnit).test("DateTime - GetUTCHoursWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getUTCHoursWorks);
            Bridge.get(QUnit).test("DateTime - GetUTCMinutesWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getUTCMinutesWorks);
            Bridge.get(QUnit).test("DateTime - GetUTCSecondsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getUTCSecondsWorks);
            Bridge.get(QUnit).test("DateTime - GetUTCMillisecondsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getUTCMillisecondsWorks);
            Bridge.get(QUnit).test("DateTime - GetUTCDayWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getUTCDayWorks);
            Bridge.get(QUnit).test("DateTime - ParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).parseWorks);
            Bridge.get(QUnit).test("DateTime - ParseExactWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).parseExactWorks);
            Bridge.get(QUnit).test("DateTime - ParseExactWithCultureWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).parseExactWithCultureWorks);
            Bridge.get(QUnit).test("DateTime - ParseExactUTCWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).parseExactUTCWorks);
            Bridge.get(QUnit).test("DateTime - ParseExactUTCWithCultureWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).parseExactUTCWithCultureWorks);
            Bridge.get(QUnit).test("DateTime - ToDateStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).toDateStringWorks);
            Bridge.get(QUnit).test("DateTime - ToTimeStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).toTimeStringWorks);
            Bridge.get(QUnit).test("DateTime - ToUTCStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).toUTCStringWorks);
            Bridge.get(QUnit).test("DateTime - ToLocaleDateStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).toLocaleDateStringWorks);
            Bridge.get(QUnit).test("DateTime - ToLocaleTimeStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).toLocaleTimeStringWorks);
            Bridge.get(QUnit).test("DateTime - SubtractingDatesWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).subtractingDatesWorks);
            Bridge.get(QUnit).test("DateTime - SubtractMethodReturningTimeSpanWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).subtractMethodReturningTimeSpanWorks);
            Bridge.get(QUnit).test("DateTime - DateEqualityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).dateEqualityWorks);
            Bridge.get(QUnit).test("DateTime - DateInequalityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).dateInequalityWorks);
            Bridge.get(QUnit).test("DateTime - DateLessThanWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).dateLessThanWorks);
            Bridge.get(QUnit).test("DateTime - DateLessEqualWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).dateLessEqualWorks);
            Bridge.get(QUnit).test("DateTime - DateGreaterThanWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).dateGreaterThanWorks);
            Bridge.get(QUnit).test("DateTime - DateGreaterEqualWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).dateGreaterEqualWorks);
            Bridge.get(QUnit).test("DateTime - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getHashCodeWorks);
            Bridge.get(QUnit).test("DateTime - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).equalsWorks);
            Bridge.get(QUnit).test("DateTime - DateTimeEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).dateTimeEqualsWorks);
            Bridge.get(QUnit).test("DateTime - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).compareToWorks);
            Bridge.get(QUnit).test("TimeSpan - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("TimeSpan - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).defaultConstructorWorks);
            Bridge.get(QUnit).test("TimeSpan - DefaultValueWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).defaultValueWorks);
            Bridge.get(QUnit).test("TimeSpan - ZeroWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).zeroWorks);
            Bridge.get(QUnit).test("TimeSpan - CreatingInstanceReturnsTimeSpanWithZeroValue", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).creatingInstanceReturnsTimeSpanWithZeroValue);
            Bridge.get(QUnit).test("TimeSpan - ParameterConstructorsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).parameterConstructorsWorks);
            Bridge.get(QUnit).test("TimeSpan - FactoryMethodsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).factoryMethodsWork);
            Bridge.get(QUnit).test("TimeSpan - PropertiesWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).propertiesWork);
            Bridge.get(QUnit).test("TimeSpan - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).compareToWorks);
            Bridge.get(QUnit).test("TimeSpan - CompareWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).compareWorks);
            Bridge.get(QUnit).test("TimeSpan - StaticEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).staticEqualsWorks);
            Bridge.get(QUnit).test("TimeSpan - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).equalsWorks);
            Bridge.get(QUnit).test("TimeSpan - ToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).toStringWorks);
            Bridge.get(QUnit).test("TimeSpan - AddWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).addWorks);
            Bridge.get(QUnit).test("TimeSpan - SubtractWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).subtractWorks);
            Bridge.get(QUnit).test("TimeSpan - DurationWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).durationWorks);
            Bridge.get(QUnit).test("TimeSpan - NegateWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).negateWorks);
            Bridge.get(QUnit).test("TimeSpan - ComparisonOperatorsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).comparisonOperatorsWork);
            Bridge.get(QUnit).test("TimeSpan - AdditionOperatorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).additionOperatorWorks);
            Bridge.get(QUnit).test("TimeSpan - SubtractionOperatorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).subtractionOperatorWorks);
            Bridge.get(QUnit).test("TimeSpan - UnaryPlusWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).unaryPlusWorks);
            Bridge.get(QUnit).test("TimeSpan - UnaryMinusWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).unaryMinusWorks);
            Bridge.get(QUnit).module("Decimal Math");
            Bridge.get(QUnit).test("TestSubtractOperator", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).testSubtractOperator);
            Bridge.get(QUnit).test("TestRemainderOperator", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).testRemainderOperator);
            Bridge.get(QUnit).test("TestMultiplyOperator", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).testMultiplyOperator);
            Bridge.get(QUnit).test("TestDivideOperator", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).testDivideOperator);
            Bridge.get(QUnit).test("TestAddOperator", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).testAddOperator);
            Bridge.get(QUnit).test("TestAddMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).testAddMethod);
            Bridge.get(QUnit).test("TestDivideMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).testDivideMethod);
            Bridge.get(QUnit).test("TestMultiplyMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).testMultiplyMethod);
            Bridge.get(QUnit).test("TestRemainderMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).testRemainderMethod);
            Bridge.get(QUnit).test("TestSubtractMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).testSubtractMethod);
            Bridge.get(QUnit).test("TestCeilingMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).testCeilingMethod);
            Bridge.get(QUnit).test("TestFloorMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).testFloorMethod);
            Bridge.get(QUnit).module("Enum");
            Bridge.get(QUnit).test("Enum - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("Enum - FirstValueOfEnumIsZero", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).firstValueOfEnumIsZero);
            Bridge.get(QUnit).test("Enum - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).getHashCodeWorks);
            Bridge.get(QUnit).test("Enum - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).equalsWorks);
            Bridge.get(QUnit).module("EqualityComparer");
            Bridge.get(QUnit).test("TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("DefaultComparerCanGetHashCodeOfNumber", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).defaultComparerCanGetHashCodeOfNumber);
            Bridge.get(QUnit).test("DefaultComparerReturnsZeroAsHashCodeForNullAndUndefined", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).defaultComparerReturnsZeroAsHashCodeForNullAndUndefined);
            Bridge.get(QUnit).test("DefaultComparerCanDetermineEquality", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).defaultComparerCanDetermineEquality);
            Bridge.get(QUnit).test("DefaultComparerInvokesOverriddenGetHashCode", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).defaultComparerInvokesOverriddenGetHashCode);
            Bridge.get(QUnit).test("DefaultComparerInvokesOverriddenEquals", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).defaultComparerInvokesOverriddenEquals);
            Bridge.get(QUnit).module("Exceptions");
            Bridge.get(QUnit).test("ArgumentException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("ArgumentException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).defaultConstructorWorks);
            Bridge.get(QUnit).test("ArgumentException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).constructorWithMessageWorks);
            Bridge.get(QUnit).test("ArgumentException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            Bridge.get(QUnit).test("ArgumentException - ConstructorWithMessageAndParamNameWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).constructorWithMessageAndParamNameWorks);
            Bridge.get(QUnit).test("ArgumentException - ConstructorWithMessageAndParamNameAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).constructorWithMessageAndParamNameAndInnerExceptionWorks);
            Bridge.get(QUnit).test("ArgumentNullException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("ArgumentNullException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).defaultConstructorWorks);
            Bridge.get(QUnit).test("ArgumentNullException - ConstructorWithParamNameWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).constructorWithParamNameWorks);
            Bridge.get(QUnit).test("ArgumentNullException - ConstructorWithParamNameAndMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).constructorWithParamNameAndMessageWorks);
            Bridge.get(QUnit).test("ArgumentNullException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            Bridge.get(QUnit).test("ArgumentOutOfRangeException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("ArgumentOutOfRangeException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).defaultConstructorWorks);
            Bridge.get(QUnit).test("ArgumentOutOfRangeException - ConstructorWithParamNameWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).constructorWithParamNameWorks);
            Bridge.get(QUnit).test("ArgumentOutOfRangeException - ConstructorWithParamNameAndMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).constructorWithParamNameAndMessageWorks);
            Bridge.get(QUnit).test("ArgumentOutOfRangeException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            Bridge.get(QUnit).test("ArgumentOutOfRangeException - ConstructorWithParamNameAndActualValueAndMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).constructorWithParamNameAndActualValueAndMessageWorks);
            Bridge.get(QUnit).test("ArgumentOutOfRangeException - RangeErrorIsConvertedToArgumentOutOfRangeException", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).rangeErrorIsConvertedToArgumentOutOfRangeException);
            Bridge.get(QUnit).test("ArithmeticException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("ArithmeticException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).defaultConstructorWorks);
            Bridge.get(QUnit).test("ArithmeticException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).constructorWithMessageWorks);
            Bridge.get(QUnit).test("ArithmeticException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            Bridge.get(QUnit).test("DivideByZeroException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("DivideByZeroException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).defaultConstructorWorks);
            Bridge.get(QUnit).test("DivideByZeroException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).constructorWithMessageWorks);
            Bridge.get(QUnit).test("DivideByZeroException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            Bridge.get(QUnit).test("Exception - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("Exception - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).defaultConstructorWorks);
            Bridge.get(QUnit).test("Exception - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).constructorWithMessageWorks);
            Bridge.get(QUnit).test("Exception - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            Bridge.get(QUnit).test("Exception - MessagePropertyCanBeOverridden", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).messagePropertyCanBeOverridden);
            Bridge.get(QUnit).test("Exception - InnerExceptionPropertyCanBeOverridden", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).innerExceptionPropertyCanBeOverridden);
            Bridge.get(QUnit).test("FormatException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("FormatException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).defaultConstructorWorks);
            Bridge.get(QUnit).test("FormatException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).constructorWithMessageWorks);
            Bridge.get(QUnit).test("FormatException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            Bridge.get(QUnit).test("InvalidCastException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("InvalidCastException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).defaultConstructorWorks);
            Bridge.get(QUnit).test("InvalidCastException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).constructorWithMessageWorks);
            Bridge.get(QUnit).test("InvalidCastException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            Bridge.get(QUnit).test("InvalidOperationException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("InvalidOperationException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).defaultConstructorWorks);
            Bridge.get(QUnit).test("InvalidOperationException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).constructorWithMessageWorks);
            Bridge.get(QUnit).test("InvalidOperationException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            Bridge.get(QUnit).test("KeyNotFoundException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("KeyNotFoundException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).defaultConstructorWorks);
            Bridge.get(QUnit).test("KeyNotFoundException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).constructorWithMessageWorks);
            Bridge.get(QUnit).test("KeyNotFoundException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            Bridge.get(QUnit).test("NotImplementedException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("NotImplementedException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).defaultConstructorWorks);
            Bridge.get(QUnit).test("NotImplementedException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).constructorWithMessageWorks);
            Bridge.get(QUnit).test("NotImplementedException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            Bridge.get(QUnit).test("NotSupportedException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("NotSupportedException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).defaultConstructorWorks);
            Bridge.get(QUnit).test("NotSupportedException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).constructorWithMessageWorks);
            Bridge.get(QUnit).test("NotSupportedException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            Bridge.get(QUnit).test("NullReferenceException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("NullReferenceException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).defaultConstructorWorks);
            Bridge.get(QUnit).test("NullReferenceException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).constructorWithMessageWorks);
            Bridge.get(QUnit).test("NullReferenceException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            Bridge.get(QUnit).test("NullReferenceException - AccessingAFieldOnANullObjectCausesANullReferenceException", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).accessingAFieldOnANullObjectCausesANullReferenceException);
            Bridge.get(QUnit).test("OverflowException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("OverflowException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).defaultConstructorWorks);
            Bridge.get(QUnit).test("OverflowException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).constructorWithMessageWorks);
            Bridge.get(QUnit).test("OverflowException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            Bridge.get(QUnit).test("RankException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("RankException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests).defaultConstructorWorks);
            Bridge.get(QUnit).test("RankException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests).constructorWithMessageWorks);
            Bridge.get(QUnit).test("Try/Catch/Finally - ThrowingAndCatchingExceptionsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests).throwingAndCatchingExceptionsWorks);
            Bridge.get(QUnit).test("Try/Catch/Finally - ExceptionOfWrongTypeIsNotCaught", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests).exceptionOfWrongTypeIsNotCaught);
            Bridge.get(QUnit).test("Try/Catch/Finally - CanCatchExceptionAsBaseType", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests).canCatchExceptionAsBaseType);
            Bridge.get(QUnit).module("Math");
            Bridge.get(QUnit).test("Math - ConstantsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).constantsWork);
            Bridge.get(QUnit).test("Math - AbsOfDoubleWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).absOfDoubleWorks);
            Bridge.get(QUnit).test("Math - AbsOfIntWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).absOfIntWorks);
            Bridge.get(QUnit).test("Math - AbsOfLongWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).absOfLongWorks);
            Bridge.get(QUnit).test("Math - AbsOfSbyteWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).absOfSbyteWorks);
            Bridge.get(QUnit).test("Math - AbsOfShortWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).absOfShortWorks);
            Bridge.get(QUnit).test("Math - AbsOfFloatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).absOfFloatWorks);
            Bridge.get(QUnit).test("Math - AbsOfDecimalWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).absOfDecimalWorks);
            Bridge.get(QUnit).test("Math - AcosWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).acosWorks);
            Bridge.get(QUnit).test("Math - AsinWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).asinWorks);
            Bridge.get(QUnit).test("Math - AtanWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).atanWorks);
            Bridge.get(QUnit).test("Math - Atan2Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).atan2Works);
            Bridge.get(QUnit).test("Math - CosWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).cosWorks);
            Bridge.get(QUnit).test("Math - DivRemWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).divRemWorks);
            Bridge.get(QUnit).test("Math - ExpWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).expWorks);
            Bridge.get(QUnit).test("Math - FloorOfDoubleWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).floorOfDoubleWorks);
            Bridge.get(QUnit).test("Math - FloorOfDecimalWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).floorOfDecimalWorks);
            Bridge.get(QUnit).test("Math - LogWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).logWorks);
            Bridge.get(QUnit).test("Math - MaxOfByteWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).maxOfByteWorks);
            Bridge.get(QUnit).test("Math - MaxOfDecimalWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).maxOfDecimalWorks);
            Bridge.get(QUnit).test("Math - MaxOfDoubleWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).maxOfDoubleWorks);
            Bridge.get(QUnit).test("Math - MaxOfShortWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).maxOfShortWorks);
            Bridge.get(QUnit).test("Math - MaxOfIntWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).maxOfIntWorks);
            Bridge.get(QUnit).test("Math - MaxOfLongWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).maxOfLongWorks);
            Bridge.get(QUnit).test("Math - MaxOfSByteWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).maxOfSByteWorks);
            Bridge.get(QUnit).test("Math - MaxOfFloatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).maxOfFloatWorks);
            Bridge.get(QUnit).test("Math - MaxOfUShortWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).maxOfUShortWorks);
            Bridge.get(QUnit).test("Math - MaxOfUIntWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).maxOfUIntWorks);
            Bridge.get(QUnit).test("Math - MaxOfULongWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).maxOfULongWorks);
            Bridge.get(QUnit).test("Math - MinOfByteWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).minOfByteWorks);
            Bridge.get(QUnit).test("Math - MinOfDecimalWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).minOfDecimalWorks);
            Bridge.get(QUnit).test("Math - MinOfDoubleWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).minOfDoubleWorks);
            Bridge.get(QUnit).test("Math - MinOfShortWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).minOfShortWorks);
            Bridge.get(QUnit).test("Math - MinOfIntWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).minOfIntWorks);
            Bridge.get(QUnit).test("Math - MinOfLongWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).minOfLongWorks);
            Bridge.get(QUnit).test("Math - MinOfSByteWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).minOfSByteWorks);
            Bridge.get(QUnit).test("Math - MinOfFloatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).minOfFloatWorks);
            Bridge.get(QUnit).test("Math - MinOfUShortWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).minOfUShortWorks);
            Bridge.get(QUnit).test("Math - MinOfUIntWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).minOfUIntWorks);
            Bridge.get(QUnit).test("Math - MinOfULongWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).minOfULongWorks);
            Bridge.get(QUnit).test("Math - PowWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).powWorks);
            Bridge.get(QUnit).test("Math - RandomWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).randomWorks);
            Bridge.get(QUnit).test("Math - RoundOfDoubleWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).roundOfDoubleWorks);
            Bridge.get(QUnit).test("Math - RoundDecimalWithModeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).roundDecimalWithModeWorks);
            Bridge.get(QUnit).test("Math - RoundDecimalWithPrecisionAndModeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).roundDecimalWithPrecisionAndModeWorks);
            Bridge.get(QUnit).test("Math - RoundDoubleWithModeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).roundDoubleWithModeWorks);
            Bridge.get(QUnit).test("Math - RoundDoubleWithPrecisionAndModeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).roundDoubleWithPrecisionAndModeWorks);
            Bridge.get(QUnit).test("Math - JsRoundWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).jsRoundWorks);
            Bridge.get(QUnit).test("Math - IEEERemainderWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).iEEERemainderWorks);
            Bridge.get(QUnit).test("Math - SinWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).sinWorks);
            Bridge.get(QUnit).test("Math - SqrtWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).sqrtWorks);
            Bridge.get(QUnit).test("Math - TanWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).tanWorks);
            Bridge.get(QUnit).module("Nullable");
            Bridge.get(QUnit).test("Nullable - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("Nullable - ConvertingToNullableWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).convertingToNullableWorks);
            Bridge.get(QUnit).test("Nullable - HasValueWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).hasValueWorks);
            Bridge.get(QUnit).test("Nullable - BoxingWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).boxingWorks);
            Bridge.get(QUnit).test("Nullable - UnboxingWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).unboxingWorks);
            Bridge.get(QUnit).test("Nullable - ValueWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).valueWorks);
            Bridge.get(QUnit).test("Nullable - UnboxingValueOfWrongTypeThrowsAnException", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).unboxingValueOfWrongTypeThrowsAnException);
            Bridge.get(QUnit).test("Nullable - GetValueOrDefaultWithArgWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).getValueOrDefaultWithArgWorks);
            Bridge.get(QUnit).test("Nullable - LiftedEqualityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedEqualityWorks);
            Bridge.get(QUnit).test("Nullable - LiftedInequalityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedInequalityWorks);
            Bridge.get(QUnit).test("Nullable - LiftedLessThanWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedLessThanWorks);
            Bridge.get(QUnit).test("Nullable - LiftedGreaterThanWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedGreaterThanWorks);
            Bridge.get(QUnit).test("Nullable - LiftedLessThanOrEqualWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedLessThanOrEqualWorks);
            Bridge.get(QUnit).test("Nullable - LiftedGreaterThanOrEqualWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedGreaterThanOrEqualWorks);
            Bridge.get(QUnit).test("Nullable - LiftedSubtractionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedSubtractionWorks);
            Bridge.get(QUnit).test("Nullable - LiftedAdditionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedAdditionWorks);
            Bridge.get(QUnit).test("Nullable - LiftedModWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedModWorks);
            Bridge.get(QUnit).test("Nullable - LiftedFloatingPointDivisionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedFloatingPointDivisionWorks);
            Bridge.get(QUnit).test("Nullable - LiftedIntegerDivisionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedIntegerDivisionWorks);
            Bridge.get(QUnit).test("Nullable - LiftedMultiplicationWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedMultiplicationWorks);
            Bridge.get(QUnit).test("Nullable - LiftedBitwiseAndWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedBitwiseAndWorks);
            Bridge.get(QUnit).test("Nullable - LiftedBitwiseOrWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedBitwiseOrWorks);
            Bridge.get(QUnit).test("Nullable - LiftedBitwiseXorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedBitwiseXorWorks);
            Bridge.get(QUnit).test("Nullable - LiftedLeftShiftWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedLeftShiftWorks);
            Bridge.get(QUnit).test("Nullable - LiftedSignedRightShiftWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedSignedRightShiftWorks);
            Bridge.get(QUnit).test("Nullable - LiftedUnsignedRightShiftWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedUnsignedRightShiftWorks);
            Bridge.get(QUnit).test("LiftedBooleanAndWorks #314", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedBooleanAndWorks);
            Bridge.get(QUnit).test("LiftedBooleanOrWorks #314", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedBooleanOrWorks);
            Bridge.get(QUnit).test("Nullable - LiftedBooleanNotWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedBooleanNotWorks);
            Bridge.get(QUnit).test("Nullable - LiftedNegationWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedNegationWorks);
            Bridge.get(QUnit).test("Nullable - LiftedUnaryPlusWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedUnaryPlusWorks);
            Bridge.get(QUnit).test("Nullable - LiftedOnesComplementWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedOnesComplementWorks);
            Bridge.get(QUnit).test("CoalesceWorks #314", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).coalesceWorks);
            Bridge.get(QUnit).module("NumberFormatInfo");
            Bridge.get(QUnit).test("TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("GetFormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests).getFormatWorks);
            Bridge.get(QUnit).test("InvariantWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests).invariantWorks);
            Bridge.get(QUnit).module("Property accessor");
            Bridge.get(QUnit).test("AccessorsCanBeInvokedInstance", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).accessorsCanBeInvokedInstance);
            Bridge.get(QUnit).test("AccessorsCanBeInvokedStatic", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).accessorsCanBeInvokedStatic);
            Bridge.get(QUnit).test("AccessorsCanBeInvokedGeneric", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).accessorsCanBeInvokedGeneric);
            Bridge.get(QUnit).test("AccessorsCanBeInvokedGenericStatic", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).accessorsCanBeInvokedGenericStatic);
            Bridge.get(QUnit).test("BaseAccessorsCanBeInvoked", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).baseAccessorsCanBeInvoked);
            Bridge.get(QUnit).test("BaseAccessorsCanBeInvokedGeneric", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).baseAccessorsCanBeInvokedGeneric);
            Bridge.get(QUnit).module("Regex");
            Bridge.get(QUnit).test("TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("StringOnlyConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).stringOnlyConstructorWorks);
            Bridge.get(QUnit).test("ConstructorWithFlagsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).constructorWithFlagsWorks);
            Bridge.get(QUnit).test("GlobalFlagWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).globalFlagWorks);
            Bridge.get(QUnit).test("IgnoreCaseFlagWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).ignoreCaseFlagWorks);
            Bridge.get(QUnit).test("MultilineFlagWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).multilineFlagWorks);
            Bridge.get(QUnit).test("PatternPropertyWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).patternPropertyWorks);
            Bridge.get(QUnit).test("SourcePropertyWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).sourcePropertyWorks);
            Bridge.get(QUnit).test("ExecWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).execWorks);
            Bridge.get(QUnit).test("LastIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).lastIndexWorks);
            Bridge.get(QUnit).test("TestWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).testWorks);
            Bridge.get(QUnit).test("EscapeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).escapeWorks);
            Bridge.get(QUnit).module("Simple types");
            Bridge.get(QUnit).test("Boolean - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("Boolean - DefaultValueIsFalse", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).defaultValueIsFalse);
            Bridge.get(QUnit).test("Boolean - CreatingInstanceReturnsFalse", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).creatingInstanceReturnsFalse);
            Bridge.get(QUnit).test("Boolean - DefaultConstructorReturnsFalse", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).defaultConstructorReturnsFalse);
            Bridge.get(QUnit).test("Boolean - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).getHashCodeWorks);
            Bridge.get(QUnit).test("Boolean - ObjectEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).objectEqualsWorks);
            Bridge.get(QUnit).test("Boolean - BoolEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).boolEqualsWorks);
            Bridge.get(QUnit).test("Byte - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("Byte - CastsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).castsWork);
            Bridge.get(QUnit).test("Byte - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).defaultValueIs0);
            Bridge.get(QUnit).test("Byte - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).defaultConstructorReturnsZero);
            Bridge.get(QUnit).test("Byte - ConstantsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).constantsWork);
            Bridge.get(QUnit).test("Byte - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).formatWorks);
            Bridge.get(QUnit).test("Byte - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).iFormattableToStringWorks);
            Bridge.get(QUnit).test("Byte - TryParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).tryParseWorks);
            Bridge.get(QUnit).test("Byte - ParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).parseWorks);
            Bridge.get(QUnit).test("Byte - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).toStringWithoutRadixWorks);
            Bridge.get(QUnit).test("Byte - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).toStringWithRadixWorks);
            Bridge.get(QUnit).test("Byte - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).getHashCodeWorks);
            Bridge.get(QUnit).test("Byte - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).equalsWorks);
            Bridge.get(QUnit).test("Byte - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).iEquatableEqualsWorks);
            Bridge.get(QUnit).test("Byte - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).compareToWorks);
            Bridge.get(QUnit).test("Byte - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).iComparableCompareToWorks);
            Bridge.get(QUnit).test("Char - TypePropertiesAreInt32", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).typePropertiesAreInt32);
            Bridge.get(QUnit).test("Char - CastsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).castsWork);
            Bridge.get(QUnit).test("Char - DefaultValueWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).defaultValueWorks);
            Bridge.get(QUnit).test("Char - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).defaultConstructorReturnsZero);
            Bridge.get(QUnit).test("Char - ConstantsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).constantsWork);
            Bridge.get(QUnit).test("Char - CharComparisonWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).charComparisonWorks);
            Bridge.get(QUnit).test("Char - ParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).parseWorks);
            Bridge.get(QUnit).test("Char - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).formatWorks);
            Bridge.get(QUnit).test("Char - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).iFormattableToStringWorks);
            Bridge.get(QUnit).test("Char - ToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).toStringWorks);
            Bridge.get(QUnit).test("Char - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).getHashCodeWorks);
            Bridge.get(QUnit).test("Char - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).equalsWorks);
            Bridge.get(QUnit).test("Char - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).iEquatableEqualsWorks);
            Bridge.get(QUnit).test("Char - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).compareToWorks);
            Bridge.get(QUnit).test("Char - IsLowerWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).isLowerWorks);
            Bridge.get(QUnit).test("Char - IsUpperWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).isUpperWorks);
            Bridge.get(QUnit).test("Char - ToLowerWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).toLowerWorks);
            Bridge.get(QUnit).test("Char - ToUpperWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).toUpperWorks);
            Bridge.get(QUnit).test("Char - IsDigitWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).isDigitWorks);
            Bridge.get(QUnit).test("Char - IsWhiteSpaceWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).isWhiteSpaceWorks);
            Bridge.get(QUnit).test("Char - IsDigitWithStringAndIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).isDigitWithStringAndIndexWorks);
            Bridge.get(QUnit).test("Char - IsWhiteSpaceWithStringAndIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).isWhiteSpaceWithStringAndIndexWorks);
            Bridge.get(QUnit).test("Decimal - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("Decimal - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).defaultValueIs0);
            Bridge.get(QUnit).test("Decimal - ConstantsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).constantsWork);
            Bridge.get(QUnit).test("Decimal - ConvertingConstructorsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).convertingConstructorsWork);
            Bridge.get(QUnit).test("Decimal - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).formatWorks);
            Bridge.get(QUnit).test("Decimal - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).iFormattableToStringWorks);
            Bridge.get(QUnit).test("Decimal - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).toStringWithoutRadixWorks);
            Bridge.get(QUnit).test("Decimal - AddWithStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).addWithStringWorks);
            Bridge.get(QUnit).test("Decimal - ConversionsToDecimalWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).conversionsToDecimalWork);
            Bridge.get(QUnit).test("Decimal - ConversionsFromDecimalWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).conversionsFromDecimalWork);
            Bridge.get(QUnit).test("Decimal - OperatorsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).operatorsWork);
            Bridge.get(QUnit).test("Decimal - AddWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).addWorks);
            Bridge.get(QUnit).test("Decimal - CeilingWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).ceilingWorks);
            Bridge.get(QUnit).test("Decimal - DivideWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).divideWorks);
            Bridge.get(QUnit).test("Decimal - FloorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).floorWorks);
            Bridge.get(QUnit).test("Decimal - RemainderWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).remainderWorks);
            Bridge.get(QUnit).test("Decimal - MultiplyWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).multiplyWorks);
            Bridge.get(QUnit).test("Decimal - NegateWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).negateWorks);
            Bridge.get(QUnit).test("Decimal - RoundWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).roundWorks);
            Bridge.get(QUnit).test("Decimal - RoundWithModeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).roundWithModeWorks);
            Bridge.get(QUnit).test("Decimal - SubtractWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).subtractWorks);
            Bridge.get(QUnit).test("Decimal - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).getHashCodeWorks);
            Bridge.get(QUnit).test("Decimal - ObjectEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).objectEqualsWorks);
            Bridge.get(QUnit).test("Decimal - DecimalEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).decimalEqualsWorks);
            Bridge.get(QUnit).test("Decimal - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).compareToWorks);
            Bridge.get(QUnit).test("Decimal - FullCoalesceWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).fullCoalesceWorks);
            Bridge.get(QUnit).test("Decimal - ShortCoalesceWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).shortCoalesceWorks);
            Bridge.get(QUnit).test("Double - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("Double - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).defaultValueIs0);
            Bridge.get(QUnit).test("Double - ConstantsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).constantsWork);
            Bridge.get(QUnit).test("Double - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).defaultConstructorReturnsZero);
            Bridge.get(QUnit).test("Double - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).formatWorks);
            Bridge.get(QUnit).test("Double - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).iFormattableToStringWorks);
            Bridge.get(QUnit).test("Double - ToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).toStringWorks);
            Bridge.get(QUnit).test("Double - ToExponentialWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).toExponentialWorks);
            Bridge.get(QUnit).test("Double - ToExponentialWithFractionalDigitsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).toExponentialWithFractionalDigitsWorks);
            Bridge.get(QUnit).test("Double - ToFixed", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).toFixed);
            Bridge.get(QUnit).test("Double - ToFixedWithFractionalDigitsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).toFixedWithFractionalDigitsWorks);
            Bridge.get(QUnit).test("Double - ToPrecisionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).toPrecisionWorks);
            Bridge.get(QUnit).test("Double - ToPrecisionWithPrecisionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).toPrecisionWithPrecisionWorks);
            Bridge.get(QUnit).test("Double - IsPositiveInfinityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).isPositiveInfinityWorks);
            Bridge.get(QUnit).test("Double - IsNegativeInfinityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).isNegativeInfinityWorks);
            Bridge.get(QUnit).test("Double - IsInfinityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).isInfinityWorks);
            Bridge.get(QUnit).test("Double - IsFiniteWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).isFiniteWorks);
            Bridge.get(QUnit).test("Double - IsNaNWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).isNaNWorks);
            Bridge.get(QUnit).test("Double - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).getHashCodeWorks);
            Bridge.get(QUnit).test("Double - ObjectEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).objectEqualsWorks);
            Bridge.get(QUnit).test("Double - DoubleEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).doubleEqualsWorks);
            Bridge.get(QUnit).test("Double - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).compareToWorks);
            Bridge.get(QUnit).test("Int16 - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("Int16 - CastsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).castsWork);
            Bridge.get(QUnit).test("Int16 - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).defaultValueIs0);
            Bridge.get(QUnit).test("Int16 - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).defaultConstructorReturnsZero);
            Bridge.get(QUnit).test("Int16 - ConstantsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).constantsWork);
            Bridge.get(QUnit).test("Int16 - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).formatWorks);
            Bridge.get(QUnit).test("Int16 - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).iFormattableToStringWorks);
            Bridge.get(QUnit).test("Int16 - TryParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).tryParseWorks);
            Bridge.get(QUnit).test("Int16 - ParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).parseWorks);
            Bridge.get(QUnit).test("Int16 - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).toStringWithoutRadixWorks);
            Bridge.get(QUnit).test("Int16 - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).toStringWithRadixWorks);
            Bridge.get(QUnit).test("Int16 - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).getHashCodeWorks);
            Bridge.get(QUnit).test("Int16 - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).equalsWorks);
            Bridge.get(QUnit).test("Int16 - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).iEquatableEqualsWorks);
            Bridge.get(QUnit).test("Int16 - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).compareToWorks);
            Bridge.get(QUnit).test("Int16 - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).iComparableCompareToWorks);
            Bridge.get(QUnit).test("Int32 - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("Int32 - CastsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).castsWork);
            Bridge.get(QUnit).test("Int32 - TypeIsWorksForInt32", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).typeIsWorksForInt32);
            Bridge.get(QUnit).test("Int32 - TypeAsWorksForInt32", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).typeAsWorksForInt32);
            Bridge.get(QUnit).test("Int32 - UnboxingWorksForInt32", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).unboxingWorksForInt32);
            Bridge.get(QUnit).test("Int32 - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).defaultValueIs0);
            Bridge.get(QUnit).test("Int32 - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).defaultConstructorReturnsZero);
            Bridge.get(QUnit).test("Int32 - ConstantsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).constantsWork);
            Bridge.get(QUnit).test("Int32 - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).formatWorks);
            Bridge.get(QUnit).test("Int32 - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).iFormattableToStringWorks);
            Bridge.get(QUnit).test("Int32 - TryParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).tryParseWorks);
            Bridge.get(QUnit).test("Int32 - ParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).parseWorks);
            Bridge.get(QUnit).test("Int32 - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).toStringWithoutRadixWorks);
            Bridge.get(QUnit).test("Int32 - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).toStringWithRadixWorks);
            Bridge.get(QUnit).test("Int32 - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).getHashCodeWorks);
            Bridge.get(QUnit).test("Int32 - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).equalsWorks);
            Bridge.get(QUnit).test("Int32 - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).iEquatableEqualsWorks);
            Bridge.get(QUnit).test("Int32 - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).compareToWorks);
            Bridge.get(QUnit).test("Int32 - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).iComparableCompareToWorks);
            Bridge.get(QUnit).test("Int32 - IntegerDivisionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).integerDivisionWorks);
            Bridge.get(QUnit).test("Int32 - IntegerModuloWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).integerModuloWorks);
            Bridge.get(QUnit).test("Int32 - IntegerDivisionByZeroThrowsDivideByZeroException", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).integerDivisionByZeroThrowsDivideByZeroException);
            Bridge.get(QUnit).test("Int32 - DoublesAreTruncatedWhenConvertedToIntegers", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).doublesAreTruncatedWhenConvertedToIntegers);
            Bridge.get(QUnit).test("Int64 - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("Int64 - CastsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).castsWork);
            Bridge.get(QUnit).test("Int64 - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).defaultValueIs0);
            Bridge.get(QUnit).test("Int64 - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).defaultConstructorReturnsZero);
            Bridge.get(QUnit).test("Int64 - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).formatWorks);
            Bridge.get(QUnit).test("Int64 - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).iFormattableToStringWorks);
            Bridge.get(QUnit).test("Int64 - TryParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).tryParseWorks);
            Bridge.get(QUnit).test("Int64 - ParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).parseWorks);
            Bridge.get(QUnit).test("Int64 - CastingOfLargeDoublesToInt64Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).castingOfLargeDoublesToInt64Works);
            Bridge.get(QUnit).test("Int64 - DivisionOfLargeInt64Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).divisionOfLargeInt64Works);
            Bridge.get(QUnit).test("Int64 - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).toStringWithoutRadixWorks);
            Bridge.get(QUnit).test("Int64 - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).toStringWithRadixWorks);
            Bridge.get(QUnit).test("Int64 - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).getHashCodeWorks);
            Bridge.get(QUnit).test("Int64 - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).equalsWorks);
            Bridge.get(QUnit).test("Int64 - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).iEquatableEqualsWorks);
            Bridge.get(QUnit).test("Int64 - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).compareToWorks);
            Bridge.get(QUnit).test("Int64 - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).iComparableCompareToWorks);
            Bridge.get(QUnit).test("Object - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("Object - CanGetHashCodeForObject", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).canGetHashCodeForObject);
            Bridge.get(QUnit).test("Object - RepeatedCallsToGetHashCodeReturnsSameValue", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).repeatedCallsToGetHashCodeReturnsSameValue);
            Bridge.get(QUnit).test("Object - ObjectIsEqualToItself", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).objectIsEqualToItself);
            Bridge.get(QUnit).test("Object - ObjectIsNotEqualToOtherObject", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).objectIsNotEqualToOtherObject);
            Bridge.get(QUnit).test("Object - StaticEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).staticEqualsWorks);
            Bridge.get(QUnit).test("Object - ReferenceEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).referenceEqualsWorks);
            Bridge.get(QUnit).test("Object - ToStringOverride", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).toStringOverride);
            Bridge.get(QUnit).test("SByte - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("SByte - CastsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).castsWork);
            Bridge.get(QUnit).test("SByte - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).defaultValueIs0);
            Bridge.get(QUnit).test("SByte - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).defaultConstructorReturnsZero);
            Bridge.get(QUnit).test("SByte - ConstantsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).constantsWork);
            Bridge.get(QUnit).test("SByte - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).formatWorks);
            Bridge.get(QUnit).test("SByte - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).iFormattableToStringWorks);
            Bridge.get(QUnit).test("SByte - TryParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).tryParseWorks);
            Bridge.get(QUnit).test("SByte - ParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).parseWorks);
            Bridge.get(QUnit).test("SByte - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).toStringWithoutRadixWorks);
            Bridge.get(QUnit).test("SByte - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).toStringWithRadixWorks);
            Bridge.get(QUnit).test("SByte - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).getHashCodeWorks);
            Bridge.get(QUnit).test("SByte - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).equalsWorks);
            Bridge.get(QUnit).test("SByte - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).iEquatableEqualsWorks);
            Bridge.get(QUnit).test("SByte - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).compareToWorks);
            Bridge.get(QUnit).test("SByte - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).iComparableCompareToWorks);
            Bridge.get(QUnit).test("Float - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("Float - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).defaultValueIs0);
            Bridge.get(QUnit).test("Float - ConstantsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).constantsWork);
            Bridge.get(QUnit).test("Float - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).defaultConstructorReturnsZero);
            Bridge.get(QUnit).test("Float - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).formatWorks);
            Bridge.get(QUnit).test("Float - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).iFormattableToStringWorks);
            Bridge.get(QUnit).test("Float - ToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).toStringWorks);
            Bridge.get(QUnit).test("Float - ToExponentialWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).toExponentialWorks);
            Bridge.get(QUnit).test("Float - ToExponentialWithFractionalDigitsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).toExponentialWithFractionalDigitsWorks);
            Bridge.get(QUnit).test("Float - ToFixed", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).toFixed);
            Bridge.get(QUnit).test("Float - ToFixedWithFractionalDigitsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).toFixedWithFractionalDigitsWorks);
            Bridge.get(QUnit).test("Float - ToPrecisionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).toPrecisionWorks);
            Bridge.get(QUnit).test("Float - ToPrecisionWithPrecisionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).toPrecisionWithPrecisionWorks);
            Bridge.get(QUnit).test("Float - IsPositiveInfinityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).isPositiveInfinityWorks);
            Bridge.get(QUnit).test("Float - IsNegativeInfinityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).isNegativeInfinityWorks);
            Bridge.get(QUnit).test("Float - IsInfinityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).isInfinityWorks);
            Bridge.get(QUnit).test("Float - IsFiniteWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).isFiniteWorks);
            Bridge.get(QUnit).test("Float - IsNaNWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).isNaNWorks);
            Bridge.get(QUnit).test("Float - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).getHashCodeWorks);
            Bridge.get(QUnit).test("Float - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).equalsWorks);
            Bridge.get(QUnit).test("Float - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).compareToWorks);
            Bridge.get(QUnit).test("Tuple - Tuple1Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).tuple1Works);
            Bridge.get(QUnit).test("Tuple - Tuple2Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).tuple2Works);
            Bridge.get(QUnit).test("Tuple - Tuple3Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).tuple3Works);
            Bridge.get(QUnit).test("Tuple - Tuple4Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).tuple4Works);
            Bridge.get(QUnit).test("Tuple - Tuple5Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).tuple5Works);
            Bridge.get(QUnit).test("Tuple - Tuple6Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).tuple6Works);
            Bridge.get(QUnit).test("Tuple - Tuple7Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).tuple7Works);
            Bridge.get(QUnit).test("Tuple - Tuple8Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).tuple8Works);
            Bridge.get(QUnit).test("UInt16 - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("UInt16 - CastsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).castsWork);
            Bridge.get(QUnit).test("UInt16 - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).defaultValueIs0);
            Bridge.get(QUnit).test("UInt16 - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).defaultConstructorReturnsZero);
            Bridge.get(QUnit).test("UInt16 - ConstantsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).constantsWork);
            Bridge.get(QUnit).test("UInt16 - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).formatWorks);
            Bridge.get(QUnit).test("UInt16 - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).iFormattableToStringWorks);
            Bridge.get(QUnit).test("UInt16 - TryParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).tryParseWorks);
            Bridge.get(QUnit).test("UInt16 - ParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).parseWorks);
            Bridge.get(QUnit).test("UInt16 - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).toStringWithoutRadixWorks);
            Bridge.get(QUnit).test("UInt16 - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).toStringWithRadixWorks);
            Bridge.get(QUnit).test("UInt16 - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).getHashCodeWorks);
            Bridge.get(QUnit).test("UInt16 - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).equalsWorks);
            Bridge.get(QUnit).test("UInt16 - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).iEquatableEqualsWorks);
            Bridge.get(QUnit).test("UInt16 - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).compareToWorks);
            Bridge.get(QUnit).test("UInt16 - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).iComparableCompareToWorks);
            Bridge.get(QUnit).test("UInt32 - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("UInt32 - CastsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).castsWork);
            Bridge.get(QUnit).test("UInt32 - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).defaultValueIs0);
            Bridge.get(QUnit).test("UInt32 - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).defaultConstructorReturnsZero);
            Bridge.get(QUnit).test("UInt32 - ConstantsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).constantsWork);
            Bridge.get(QUnit).test("UInt32 - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).formatWorks);
            Bridge.get(QUnit).test("UInt32 - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).iFormattableToStringWorks);
            Bridge.get(QUnit).test("UInt32 - TryParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).tryParseWorks);
            Bridge.get(QUnit).test("UInt32 - ParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).parseWorks);
            Bridge.get(QUnit).test("UInt32 - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).toStringWithoutRadixWorks);
            Bridge.get(QUnit).test("UInt32 - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).toStringWithRadixWorks);
            Bridge.get(QUnit).test("UInt32 - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).getHashCodeWorks);
            Bridge.get(QUnit).test("UInt32 - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).equalsWorks);
            Bridge.get(QUnit).test("UInt32 - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).iEquatableEqualsWorks);
            Bridge.get(QUnit).test("UInt32 - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).compareToWorks);
            Bridge.get(QUnit).test("UInt32 - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).iComparableCompareToWorks);
            Bridge.get(QUnit).test("UInt64 - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("UInt64 - CastsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).castsWork);
            Bridge.get(QUnit).test("UInt64 - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).defaultValueIs0);
            Bridge.get(QUnit).test("UInt64 - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).defaultConstructorReturnsZero);
            Bridge.get(QUnit).test("UInt64 - ConstantsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).constantsWork);
            Bridge.get(QUnit).test("UInt64 - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).formatWorks);
            Bridge.get(QUnit).test("UInt64 - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).iFormattableToStringWorks);
            Bridge.get(QUnit).test("UInt64 - CastingOfLargeValuesToUInt64Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).castingOfLargeValuesToUInt64Works);
            Bridge.get(QUnit).test("UInt64 - DivisionOfLargeUInt64Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).divisionOfLargeUInt64Works);
            Bridge.get(QUnit).test("UInt64 - TryParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).tryParseWorks);
            Bridge.get(QUnit).test("UInt64 - ParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).parseWorks);
            Bridge.get(QUnit).test("UInt64 - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).toStringWithoutRadixWorks);
            Bridge.get(QUnit).test("UInt64 - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).toStringWithRadixWorks);
            Bridge.get(QUnit).test("UInt64 - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).getHashCodeWorks);
            Bridge.get(QUnit).test("UInt64 - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).equalsWorks);
            Bridge.get(QUnit).test("UInt64 - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).iEquatableEqualsWorks);
            Bridge.get(QUnit).test("UInt64 - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).compareToWorks);
            Bridge.get(QUnit).test("UInt64 - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).iComparableCompareToWorks);
            Bridge.get(QUnit).module("String");
            Bridge.get(QUnit).test("String - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("String - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).defaultConstructorWorks);
            Bridge.get(QUnit).test("String - CopyConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).copyConstructorWorks);
            Bridge.get(QUnit).test("String - CharAndCountConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).charAndCountConstructorWorks);
            Bridge.get(QUnit).test("String - CharArrayConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).charArrayConstructorWorks);
            Bridge.get(QUnit).test("String - EmptyFieldWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).emptyFieldWorks);
            Bridge.get(QUnit).test("String - LengthPropertyWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).lengthPropertyWorks);
            Bridge.get(QUnit).test("String - CharAtWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).charAtWorks);
            Bridge.get(QUnit).test("String - CharCodeAtWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).charCodeAtWorks);
            Bridge.get(QUnit).test("String - CompareWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).compareWorks);
            Bridge.get(QUnit).test("String - CompareWithIgnoreCaseArgWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).compareWithIgnoreCaseArgWorks);
            Bridge.get(QUnit).test("String - ConcatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).concatWorks);
            Bridge.get(QUnit).test("String - ConcatWithObjectsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).concatWithObjectsWorks);
            Bridge.get(QUnit).test("String - EndsWithCharWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).endsWithCharWorks);
            Bridge.get(QUnit).test("String - EndsWithStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).endsWithStringWorks);
            Bridge.get(QUnit).test("String - StaticEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).staticEqualsWorks);
            Bridge.get(QUnit).test("String - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).formatWorks);
            Bridge.get(QUnit).test("String - FormatWorksWithIFormattable", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).formatWorksWithIFormattable);
            Bridge.get(QUnit).test("String - FormatCanUseEscapedBraces", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).formatCanUseEscapedBraces);
            Bridge.get(QUnit).test("String - FromCharCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).fromCharCodeWorks);
            Bridge.get(QUnit).test("String - IndexOfCharWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).indexOfCharWorks);
            Bridge.get(QUnit).test("String - IndexOfStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).indexOfStringWorks);
            Bridge.get(QUnit).test("String - IndexOfCharWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).indexOfCharWithStartIndexWorks);
            Bridge.get(QUnit).test("String - IndexOfCharWithStartIndexAndCountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).indexOfCharWithStartIndexAndCountWorks);
            Bridge.get(QUnit).test("String - IndexOfStringWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).indexOfStringWithStartIndexWorks);
            Bridge.get(QUnit).test("String - IndexOfStringWithStartIndexAndCountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).indexOfStringWithStartIndexAndCountWorks);
            Bridge.get(QUnit).test("String - IndexOfAnyWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).indexOfAnyWorks);
            Bridge.get(QUnit).test("String - IndexOfAnyWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).indexOfAnyWithStartIndexWorks);
            Bridge.get(QUnit).test("String - IndexOfAnyWithStartIndexAndCountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).indexOfAnyWithStartIndexAndCountWorks);
            Bridge.get(QUnit).test("String - InsertWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).insertWorks);
            Bridge.get(QUnit).test("String - IsNullOrEmptyWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).isNullOrEmptyWorks);
            Bridge.get(QUnit).test("String - LastIndexOfCharWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).lastIndexOfCharWorks);
            Bridge.get(QUnit).test("String - LastIndexOfStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).lastIndexOfStringWorks);
            Bridge.get(QUnit).test("String - LastIndexOfCharWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).lastIndexOfCharWithStartIndexWorks);
            Bridge.get(QUnit).test("String - LastIndexOfStringWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).lastIndexOfStringWithStartIndexWorks);
            Bridge.get(QUnit).test("String - LastIndexOfCharWithStartIndexAndCountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).lastIndexOfCharWithStartIndexAndCountWorks);
            Bridge.get(QUnit).test("String - LastIndexOfStringWithStartIndexAndCountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).lastIndexOfStringWithStartIndexAndCountWorks);
            Bridge.get(QUnit).test("String - LastIndexOfAnyWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).lastIndexOfAnyWorks);
            Bridge.get(QUnit).test("String - LastIndexOfAnyWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).lastIndexOfAnyWithStartIndexWorks);
            Bridge.get(QUnit).test("String - LastIndexOfAnyWithStartIndexAndCountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).lastIndexOfAnyWithStartIndexAndCountWorks);
            Bridge.get(QUnit).test("String - LocaleCompareWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).localeCompareWorks);
            Bridge.get(QUnit).test("String - MatchWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).matchWorks);
            Bridge.get(QUnit).test("String - PadLeftWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).padLeftWorks);
            Bridge.get(QUnit).test("String - PadLeftWithCharWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).padLeftWithCharWorks);
            Bridge.get(QUnit).test("String - PadRightWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).padRightWorks);
            Bridge.get(QUnit).test("String - PadRightWithCharWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).padRightWithCharWorks);
            Bridge.get(QUnit).test("String - RemoveWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).removeWorks);
            Bridge.get(QUnit).test("String - RemoveWithCountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).removeWithCountWorks);
            Bridge.get(QUnit).test("String - ReplaceWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).replaceWorks);
            Bridge.get(QUnit).test("String - ReplaceCharWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).replaceCharWorks);
            Bridge.get(QUnit).test("String - ReplaceRegexWithReplaceTextWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).replaceRegexWithReplaceTextWorks);
            Bridge.get(QUnit).test("String - ReplaceRegexWithReplaceCallbackWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).replaceRegexWithReplaceCallbackWorks);
            Bridge.get(QUnit).test("String - SearchWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).searchWorks);
            Bridge.get(QUnit).test("String - SliceWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).sliceWorks);
            Bridge.get(QUnit).test("String - SplitWithStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).splitWithStringWorks);
            Bridge.get(QUnit).test("String - SplitWithCharWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).splitWithCharWorks);
            Bridge.get(QUnit).test("String - JsSplitWithStringAndLimitWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).jsSplitWithStringAndLimitWorks);
            Bridge.get(QUnit).test("String - JsSplitWithCharAndLimitWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).jsSplitWithCharAndLimitWorks);
            Bridge.get(QUnit).test("String - SplitWithCharsAndLimitWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).splitWithCharsAndLimitWorks);
            Bridge.get(QUnit).test("String - SplitWithCharsAndStringSplitOptionsAndLimitWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).splitWithCharsAndStringSplitOptionsAndLimitWorks);
            Bridge.get(QUnit).test("String - SplitWithRegexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).splitWithRegexWorks);
            Bridge.get(QUnit).test("String - SomeNetSplitTests", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).someNetSplitTests);
            Bridge.get(QUnit).test("String - SplitWithCharsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).splitWithCharsWorks);
            Bridge.get(QUnit).test("String - SplitWithStringsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).splitWithStringsWorks);
            Bridge.get(QUnit).test("String - SplitWithStringsAndLimitWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).splitWithStringsAndLimitWorks);
            Bridge.get(QUnit).test("String - StartsWithCharWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).startsWithCharWorks);
            Bridge.get(QUnit).test("String - StartsWithStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).startsWithStringWorks);
            Bridge.get(QUnit).test("String - SubstrWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).substrWorks);
            Bridge.get(QUnit).test("String - SubstringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).substringWorks);
            Bridge.get(QUnit).test("String - JsSubstringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).jsSubstringWorks);
            Bridge.get(QUnit).test("String - ToLowerCaseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).toLowerCaseWorks);
            Bridge.get(QUnit).test("String - ToUpperCaseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).toUpperCaseWorks);
            Bridge.get(QUnit).test("String - ToLowerWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).toLowerWorks);
            Bridge.get(QUnit).test("String - ToUpperWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).toUpperWorks);
            Bridge.get(QUnit).test("String - TrimWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).trimWorks);
            Bridge.get(QUnit).test("String - TrimCharsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).trimCharsWorks);
            Bridge.get(QUnit).test("String - TrimStartCharsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).trimStartCharsWorks);
            Bridge.get(QUnit).test("String - TrimEndCharsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).trimEndCharsWorks);
            Bridge.get(QUnit).test("String - TrimStartWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).trimStartWorks);
            Bridge.get(QUnit).test("String - TrimEndWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).trimEndWorks);
            Bridge.get(QUnit).test("String - StringEqualityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).stringEqualityWorks);
            Bridge.get(QUnit).test("String - StringInequalityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).stringInequalityWorks);
            Bridge.get(QUnit).test("String - StringIndexingWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).stringIndexingWorks);
            Bridge.get(QUnit).test("String - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).getHashCodeWorks);
            Bridge.get(QUnit).test("String - InstanceEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).instanceEqualsWorks);
            Bridge.get(QUnit).test("String - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).iEquatableEqualsWorks);
            Bridge.get(QUnit).test("String - StringEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).stringEqualsWorks);
            Bridge.get(QUnit).test("String - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).compareToWorks);
            Bridge.get(QUnit).test("String - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).iComparableCompareToWorks);
            Bridge.get(QUnit).test("String - JoinWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).joinWorks);
            Bridge.get(QUnit).test("String - ContainsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).containsWorks);
            Bridge.get(QUnit).test("String - ToCharArrayWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).toCharArrayWorks);
            Bridge.get(QUnit).test("StringBuilder - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("StringBuilder - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).defaultConstructorWorks);
            Bridge.get(QUnit).test("StringBuilder - ConstructorWithCapacityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).constructorWithCapacityWorks);
            Bridge.get(QUnit).test("StringBuilder - InitialTextConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).initialTextConstructorWorks);
            Bridge.get(QUnit).test("StringBuilder - InitialTextConstructorWithCapacityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).initialTextConstructorWithCapacityWorks);
            Bridge.get(QUnit).test("StringBuilder - SubstringConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).substringConstructorWorks);
            Bridge.get(QUnit).test("StringBuilder - AppendBoolWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).appendBoolWorks);
            Bridge.get(QUnit).test("StringBuilder - AppendCharWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).appendCharWorks);
            Bridge.get(QUnit).test("StringBuilder - AppendIntWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).appendIntWorks);
            Bridge.get(QUnit).test("StringBuilder - AppendDoubleWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).appendDoubleWorks);
            Bridge.get(QUnit).test("StringBuilder - AppendObjectWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).appendObjectWorks);
            Bridge.get(QUnit).test("StringBuilder - AppendStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).appendStringWorks);
            Bridge.get(QUnit).test("StringBuilder - AppendLineWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).appendLineWorks);
            Bridge.get(QUnit).test("StringBuilder - AppendLineStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).appendLineStringWorks);
            Bridge.get(QUnit).test("StringBuilder - ClearWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).clearWorks);
            Bridge.get(QUnit).test("StringBuilder - ToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).toStringWorks);
            Bridge.get(QUnit).test("StringBuilder - LengthPropertyWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).lengthPropertyWorks);
            Bridge.get(QUnit).module("Utilities");
            Bridge.get(QUnit).test("Environment - NewLineIsAStringContainingOnlyTheNewLineChar", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests).newLineIsAStringContainingOnlyTheNewLineChar);
            Bridge.get(QUnit).module("СultureInfo");
            Bridge.get(QUnit).test("TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests).typePropertiesAreCorrect);
            Bridge.get(QUnit).test("GetFormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests).getFormatWorks);
            Bridge.get(QUnit).test("InvariantWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests).invariantWorks);
        }
    }
});

Bridge.init();