export default function permissionsSelector({
  state,
  modelPermissions,
  selectedModelPermissions,
}) {
    return {
        state,
        modelPermissions,
        selectedModelPermissions,

        init: function () {
            // set the state to empty array
            this.state = this.selectedModelPermissions ?? [];
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
