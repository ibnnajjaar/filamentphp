// resources/js/components/permissions-selector.js
function permissionsSelector({
                                 state,
                                 modelPermissions,
                                 selectedModelPermissions
                             }) {
    return {
        state,
        modelPermissions,
        selectedModelPermissions,
        searchByModels: "",
        searchByPermissions: "",
        displayedModels: [],
        displayedModelPermissions: [],
        init: function () {
            this.state = this.selectedModelPermissions ?? [];
            this.displayedModels = this.modelPermissions;
        },

        searchModels() {
            this.displayedModels = this.modelPermissions.filter((modelPermission) => {
                return modelPermission.model.toLowerCase().includes(this.searchByModels.toLowerCase());
            });
            this.displayedModelPermissions = this.displayedModels;
        },

        searchPermissions() {
            if (this.displayedModelPermissions.length === 0) {
                this.displayedModelPermissions = this.modelPermissions;
            }
            this.displayedModels = this.displayedModelPermissions.map((modelPermission) => {
                return {
                    model: modelPermission.model,
                    permissions: modelPermission.permissions.filter((permission) => {
                        return permission.name.toLowerCase().includes(this.searchByPermissions.toLowerCase());
                    })
                };
            });
        },

        updatePermission(permissionId) {
            const index = this.selectedModelPermissions.indexOf(permissionId);
            if (index === -1) {
                this.selectedModelPermissions.push(permissionId);
            } else {
                this.selectedModelPermissions.splice(index, 1);
            }
        },

        allPermissionsAreSelected() {
            // Count the permissions in modelPermissions
            let permissionsCount = 0;
            this.modelPermissions.forEach((modelPermission) => {
                permissionsCount += modelPermission.permissions.length;
            });

            return this.selectedModelPermissions.length === permissionsCount;
        },

        selectAllPermissions() {
            let permissions = [];
            this.modelPermissions.forEach((modelPermission) => {
                modelPermission.permissions.forEach((permission) => {
                    permissions.push(permission.id);
                });
            });

            this.selectedModelPermissions = permissions;
        },

        deselectAllPermissions() {
            this.selectedModelPermissions = [];
        },

        isChecked(permissionId) {
            return this.selectedModelPermissions.includes(permissionId);
        }
    };
}

export {
    permissionsSelector as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vY29tcG9uZW50cy9wZXJtaXNzaW9ucy1zZWxlY3Rvci5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGVybWlzc2lvbnNTZWxlY3Rvcih7XG4gIHN0YXRlLFxuICBtb2RlbFBlcm1pc3Npb25zLFxuICBzZWxlY3RlZE1vZGVsUGVybWlzc2lvbnMsXG59KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIG1vZGVsUGVybWlzc2lvbnMsXG4gICAgICAgIHNlbGVjdGVkTW9kZWxQZXJtaXNzaW9ucyxcbiAgICAgICAgc2VhcmNoQnlNb2RlbHM6ICcnLFxuICAgICAgICBzZWFyY2hCeVBlcm1pc3Npb25zOiAnJyxcbiAgICAgICAgZGlzcGxheWVkTW9kZWxzOiBbXSxcbiAgICAgICAgZGlzcGxheWVkTW9kZWxQZXJtaXNzaW9uczogW10sXG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gc2V0IHRoZSBzdGF0ZSB0byBlbXB0eSBhcnJheVxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuc2VsZWN0ZWRNb2RlbFBlcm1pc3Npb25zID8/IFtdO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWRNb2RlbHMgPSB0aGlzLm1vZGVsUGVybWlzc2lvbnM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2VhcmNoTW9kZWxzKCkge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWRNb2RlbHMgPSB0aGlzLm1vZGVsUGVybWlzc2lvbnMuZmlsdGVyKG1vZGVsUGVybWlzc2lvbiA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZGVsUGVybWlzc2lvbi5tb2RlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoQnlNb2RlbHMudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWRNb2RlbFBlcm1pc3Npb25zID0gdGhpcy5kaXNwbGF5ZWRNb2RlbHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2VhcmNoUGVybWlzc2lvbnMoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kaXNwbGF5ZWRNb2RlbFBlcm1pc3Npb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheWVkTW9kZWxQZXJtaXNzaW9ucyA9IHRoaXMubW9kZWxQZXJtaXNzaW9ucztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWRNb2RlbHMgPSB0aGlzLmRpc3BsYXllZE1vZGVsUGVybWlzc2lvbnMubWFwKG1vZGVsUGVybWlzc2lvbiA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IG1vZGVsUGVybWlzc2lvbi5tb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IG1vZGVsUGVybWlzc2lvbi5wZXJtaXNzaW9ucy5maWx0ZXIocGVybWlzc2lvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGVybWlzc2lvbi5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hCeVBlcm1pc3Npb25zLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgdXBkYXRlUGVybWlzc2lvbihwZXJtaXNzaW9uSWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGF0ZS5pbmRleE9mKHBlcm1pc3Npb25JZCk7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBwZXJtaXNzaW9uIGlzIG5vdCBpbiB0aGUgc3RhdGUsIGFkZCBpdFxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucHVzaChwZXJtaXNzaW9uSWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcGVybWlzc2lvbiBpcyBpbiB0aGUgc3RhdGUsIHJlbW92ZSBpdFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBpc0NoZWNrZWQocGVybWlzc2lvbklkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pbmNsdWRlcyhwZXJtaXNzaW9uSWQpO1xuICAgICAgICB9XG5cbiAgICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWUsU0FBUixvQkFBcUM7QUFBQSxFQUMxQztBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0YsR0FBRztBQUNDLFNBQU87QUFBQSxJQUNIO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBLGdCQUFnQjtBQUFBLElBQ2hCLHFCQUFxQjtBQUFBLElBQ3JCLGlCQUFpQixDQUFDO0FBQUEsSUFDbEIsMkJBQTJCLENBQUM7QUFBQSxJQUU1QixNQUFNLFdBQVk7QUFFZCxXQUFLLFFBQVEsS0FBSyw0QkFBNEIsQ0FBQztBQUMvQyxXQUFLLGtCQUFrQixLQUFLO0FBQUEsSUFDaEM7QUFBQSxJQUVBLGVBQWU7QUFDWCxXQUFLLGtCQUFrQixLQUFLLGlCQUFpQixPQUFPLHFCQUFtQjtBQUNuRSxlQUFPLGdCQUFnQixNQUFNLFlBQVksRUFBRSxTQUFTLEtBQUssZUFBZSxZQUFZLENBQUM7QUFBQSxNQUN6RixDQUFDO0FBRUQsV0FBSyw0QkFBNEIsS0FBSztBQUFBLElBQzFDO0FBQUEsSUFFQSxvQkFBb0I7QUFDaEIsVUFBSSxLQUFLLDBCQUEwQixXQUFXLEdBQUc7QUFDN0MsYUFBSyw0QkFBNEIsS0FBSztBQUFBLE1BQzFDO0FBRUEsV0FBSyxrQkFBa0IsS0FBSywwQkFBMEIsSUFBSSxxQkFBbUI7QUFDekUsZUFBTztBQUFBLFVBQ0gsT0FBTyxnQkFBZ0I7QUFBQSxVQUN2QixhQUFhLGdCQUFnQixZQUFZLE9BQU8sZ0JBQWM7QUFDMUQsbUJBQU8sV0FBVyxLQUFLLFlBQVksRUFBRSxTQUFTLEtBQUssb0JBQW9CLFlBQVksQ0FBQztBQUFBLFVBQ3hGLENBQUM7QUFBQSxRQUNMO0FBQUEsTUFDSixDQUFDO0FBQUEsSUFDTDtBQUFBLElBRUEsaUJBQWlCLGNBQWM7QUFDM0IsWUFBTSxRQUFRLEtBQUssTUFBTSxRQUFRLFlBQVk7QUFHN0MsVUFBSSxVQUFVLElBQUk7QUFDZCxhQUFLLE1BQU0sS0FBSyxZQUFZO0FBQUEsTUFDaEMsT0FBTztBQUVILGFBQUssTUFBTSxPQUFPLE9BQU8sQ0FBQztBQUFBLE1BQzlCO0FBQUEsSUFDSjtBQUFBLElBRUEsVUFBVSxjQUFjO0FBQ3BCLGFBQU8sS0FBSyxNQUFNLFNBQVMsWUFBWTtBQUFBLElBQzNDO0FBQUEsRUFFSjtBQUNKOyIsCiAgIm5hbWVzIjogW10KfQo=
