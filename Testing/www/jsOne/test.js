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
        areDeepEqual: function (actual, expected) {
            Bridge.get(Bridge.Test.Assert).assert.deepEqual(actual, expected);
        },
        areDeepEqual$1: function (actual, expected, description) {
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
        areNotDeepEqual: function (actual, expected) {
            Bridge.get(Bridge.Test.Assert).assert.notDeepEqual(actual, expected);
        },
        areNotDeepEqual$1: function (actual, expected, description) {
            Bridge.get(Bridge.Test.Assert).assert.notDeepEqual(actual, expected, description);
        },
        areNotStrictEqual: function (actual, expected) {
            Bridge.get(Bridge.Test.Assert).assert.notStrictEqual(actual, expected);
        },
        areNotStrictEqual$1: function (actual, expected, description) {
            Bridge.get(Bridge.Test.Assert).assert.notStrictEqual(actual, expected, description);
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
            Bridge.get(Bridge.Test.Assert).assert.ok(!Bridge.hasValue(anObject));
        },
        null$1: function (anObject, message) {
            Bridge.get(Bridge.Test.Assert).assert.ok(!Bridge.hasValue(anObject), message);
        },
        notNull: function (anObject) {
            Bridge.get(Bridge.Test.Assert).assert.notOk(!Bridge.hasValue(anObject));
        },
        notNull$1: function (anObject, message) {
            Bridge.get(Bridge.Test.Assert).assert.notOk(!Bridge.hasValue(anObject), message);
        }
    }
});

Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772', {
    statics: {
        instance: null,
        getInstance: function () {
            if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).instance)) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).instance = new Bridge.ClientTestOne.BridgeIssues.N772();
            }
            return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        lengthWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.lengthWorks();
        },
        rankIsOne: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.rankIsOne();
        },
        getLengthWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.getLengthWorks();
        },
        getLowerBound: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.getLowerBound();
        },
        getUpperBoundWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.getUpperBoundWorks();
        },
        gettingValueByIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.gettingValueByIndexWorks();
        },
        getValueWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.getValueWorks();
        },
        settingValueByIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.settingValueByIndexWorks();
        },
        setValueWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.setValueWorks();
        },
        foreachWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.foreachWorks();
        },
        cloneWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.cloneWorks();
        },
        concatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.concatWorks();
        },
        containsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.containsWorks();
        },
        containsUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.containsUsesEqualsMethod();
        },
        allWithArrayItemFilterCallbackWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.allWithArrayItemFilterCallbackWorks();
        },
        sliceWithoutEndWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.sliceWithoutEndWorks();
        },
        foreachWithArrayItemCallbackWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.foreachWithArrayItemCallbackWorks();
        },
        foreachWithArrayCallbackWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.foreachWithArrayCallbackWorks();
        },
        indexOfWithoutStartIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.indexOfWithoutStartIndexWorks();
        },
        indexOfWithoutStartIndexUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.indexOfWithoutStartIndexUsesEqualsMethod();
        },
        indexOfWithStartIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.indexOfWithStartIndexWorks();
        },
        joinWithoutDelimiterWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.joinWithoutDelimiterWorks();
        },
        reverseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.reverseWorks();
        },
        anyWithArrayItemFilterCallbackWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.anyWithArrayItemFilterCallbackWorks();
        },
        binarySearch1Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.binarySearch1Works();
        },
        binarySearch2Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.binarySearch2Works();
        },
        binarySearch3Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.binarySearch3Works();
        },
        binarySearch4Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.binarySearch4Works();
        },
        binarySearchExceptionsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.binarySearchExceptionsWorks();
        },
        sortWithDefaultCompareWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.sortWithDefaultCompareWorks();
        },
        sort1Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.sort1Works();
        },
        sort2Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.sort2Works();
        },
        sort3Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.sort3Works();
        },
        sort4Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.sort4Works();
        },
        sortExceptionsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.sortExceptionsWorks();
        },
        foreachWhenCastToIListWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.foreachWhenCastToIListWorks();
        },
        iCollectionCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.iCollectionCountWorks();
        },
        iCollectionAddWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.iCollectionAddWorks();
        },
        iCollectionClearWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.iCollectionClearWorks();
        },
        iCollectionContainsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.iCollectionContainsWorks();
        },
        iCollectionContainsUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.iCollectionContainsUsesEqualsMethod();
        },
        iCollectionRemoveWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.iCollectionRemoveWorks();
        },
        iListIndexingWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.iListIndexingWorks();
        },
        iListIndexOfWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.iListIndexOfWorks();
        },
        iListIndexOfUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.iListIndexOfUsesEqualsMethod();
        },
        iListInsertWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.iListInsertWorks();
        },
        iListRemoveAtWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.iListRemoveAtWorks();
        },
        issueSpecific: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(false, assert);
            t.issueSpecific();
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).beforeTest(true, assert);
            assert.expect(10);
            Bridge.get(Bridge.ClientTestOne.BridgeIssues.N772).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.TestRunner', {
    statics: {
        config: {
            init: function () {
                Bridge.ready(this.runTests);
            }
        },
        runTests: function () {
            QUnit.module("Issues");
            QUnit.test("#772 clientOne - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).typePropertiesAreCorrect);
            QUnit.test("#772 clientOne - LengthWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).lengthWorks);
            QUnit.test("#772 clientOne - RankIsOne", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).rankIsOne);
            QUnit.test("#772 clientOne - GetLengthWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).getLengthWorks);
            QUnit.test("#772 clientOne - GetLowerBound", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).getLowerBound);
            QUnit.test("#772 clientOne - GetUpperBoundWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).getUpperBoundWorks);
            QUnit.test("#772 clientOne - GettingValueByIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).gettingValueByIndexWorks);
            QUnit.test("#772 clientOne - GetValueWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).getValueWorks);
            QUnit.test("#772 clientOne - SettingValueByIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).settingValueByIndexWorks);
            QUnit.test("#772 clientOne - SetValueWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).setValueWorks);
            QUnit.test("#772 clientOne - ForeachWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).foreachWorks);
            QUnit.test("#772 clientOne - CloneWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).cloneWorks);
            QUnit.test("#772 clientOne - ConcatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).concatWorks);
            QUnit.test("#772 clientOne - ContainsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).containsWorks);
            QUnit.test("#772 clientOne - ContainsUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).containsUsesEqualsMethod);
            QUnit.test("#772 clientOne - AllWithArrayItemFilterCallbackWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).allWithArrayItemFilterCallbackWorks);
            QUnit.test("#772 clientOne - SliceWithoutEndWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).sliceWithoutEndWorks);
            QUnit.test("#772 clientOne - ForeachWithArrayItemCallbackWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).foreachWithArrayItemCallbackWorks);
            QUnit.test("#772 clientOne - ForeachWithArrayCallbackWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).foreachWithArrayCallbackWorks);
            QUnit.test("#772 clientOne - IndexOfWithoutStartIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).indexOfWithoutStartIndexWorks);
            QUnit.test("#772 clientOne - IndexOfWithoutStartIndexUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).indexOfWithoutStartIndexUsesEqualsMethod);
            QUnit.test("#772 clientOne - IndexOfWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).indexOfWithStartIndexWorks);
            QUnit.test("#772 clientOne - JoinWithoutDelimiterWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).joinWithoutDelimiterWorks);
            QUnit.test("#772 clientOne - ReverseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).reverseWorks);
            QUnit.test("#772 clientOne - AnyWithArrayItemFilterCallbackWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).anyWithArrayItemFilterCallbackWorks);
            QUnit.test("#772 clientOne - BinarySearch1Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).binarySearch1Works);
            QUnit.test("#772 clientOne - BinarySearch2Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).binarySearch2Works);
            QUnit.test("#772 clientOne - BinarySearch3Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).binarySearch3Works);
            QUnit.test("#772 clientOne - BinarySearch4Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).binarySearch4Works);
            QUnit.test("#772 clientOne - BinarySearchExceptionsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).binarySearchExceptionsWorks);
            QUnit.test("#772 clientOne - SortWithDefaultCompareWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).sortWithDefaultCompareWorks);
            QUnit.test("#772 clientOne - Sort1Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).sort1Works);
            QUnit.test("#772 clientOne - Sort2Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).sort2Works);
            QUnit.test("#772 clientOne - Sort3Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).sort3Works);
            QUnit.test("#772 clientOne - Sort4Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).sort4Works);
            QUnit.test("#772 clientOne - SortExceptionsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).sortExceptionsWorks);
            QUnit.test("#772 clientOne - ForeachWhenCastToIListWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).foreachWhenCastToIListWorks);
            QUnit.test("#772 clientOne - ICollectionCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).iCollectionCountWorks);
            QUnit.test("#772 clientOne - ICollectionAddWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).iCollectionAddWorks);
            QUnit.test("#772 clientOne - ICollectionClearWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).iCollectionClearWorks);
            QUnit.test("#772 clientOne - ICollectionContainsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).iCollectionContainsWorks);
            QUnit.test("#772 clientOne - ICollectionContainsUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).iCollectionContainsUsesEqualsMethod);
            QUnit.test("#772 clientOne - ICollectionRemoveWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).iCollectionRemoveWorks);
            QUnit.test("#772 clientOne - IListIndexingWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).iListIndexingWorks);
            QUnit.test("#772 clientOne - IListIndexOfWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).iListIndexOfWorks);
            QUnit.test("#772 clientOne - IListIndexOfUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).iListIndexOfUsesEqualsMethod);
            QUnit.test("#772 clientOne - IListInsertWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).iListInsertWorks);
            QUnit.test("#772 clientOne - IListRemoveAtWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).iListRemoveAtWorks);
            QUnit.test("#772 clientOne - IssueSpecific", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).issueSpecific);
            QUnit.test("#772 clientOne - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssuesN772).testUseCase);
        }
    }
});

Bridge.init();