    // @source INotifyPropertyChanged.js

    Bridge.define("System.ComponentModel.INotifyPropertyChanged");

    Bridge.define("System.ComponentModel.PropertyChangedEventArgs", {
        constructor: function (propertyName) {
            this.$initialize();
            this.propertyName = propertyName;
        }
    });
