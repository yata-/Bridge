    // @source INotifyPropertyChanged.js

    Bridge.define("System.ComponentModel.INotifyPropertyChanged");

    Bridge.define("System.ComponentModel.PropertyChangedEventArgs", {
        constructor: function (propertyName, newValue, oldValue) {
            this.propertyName = propertyName;
            this.newValue = newValue;
            this.oldValue = oldValue;
        }
    });
