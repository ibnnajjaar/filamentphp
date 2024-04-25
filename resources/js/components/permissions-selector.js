export default function permissionsSelector({
  state,
  modelPermissions,
  selectedModelPermissions,
}) {
    return {
        state,
        modelPermissions,
        selectedModelPermissions,
        searchByModels: '',
        searchByPermissions: '',
        displayedModels: [],
        displayedModelPermissions: [],

        init: function () {
            // set the state to empty array
            this.state = this.selectedModelPermissions ?? [];
            this.displayedModels = this.modelPermissions;
        },

        searchModels() {
            this.displayedModels = this.modelPermissions.filter(modelPermission => {
                return modelPermission.model.toLowerCase().includes(this.searchByModels.toLowerCase());
            });

            this.displayedModelPermissions = this.displayedModels;
        },

        searchPermissions() {
            if (this.displayedModelPermissions.length === 0) {
                this.displayedModelPermissions = this.modelPermissions;
            }

            this.displayedModels = this.displayedModelPermissions.map(modelPermission => {
                return {
                    model: modelPermission.model,
                    permissions: modelPermission.permissions.filter(permission => {
                        return permission.name.toLowerCase().includes(this.searchByPermissions.toLowerCase());
                    })
                }
            })
        },

        updatePermission(permissionId) {
            const index = this.state.indexOf(permissionId);

            // If the permission is not in the state, add it
            if (index === -1) {
                this.state.push(permissionId);
            } else {
                // If the permission is in the state, remove it
                this.state.splice(index, 1);
            }
        },

        isChecked(permissionId) {
            return this.state.includes(permissionId);
        }

    }
}
