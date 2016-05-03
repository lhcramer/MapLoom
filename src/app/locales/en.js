(function() {
  var translations = {
    'brand_name': 'MapStory',
    'new_map': 'New MapStory',
    'remove_chapter': 'Remove Chapter',
    'sure_remove_chapter': 'Are you sure that you want to remove this chapter?',
    'cannot_remove_chapter': 'Mapstory must contain at least one chapter.',
    'layer_type_not_supported': 'Layer type not supported',
    'projection_not_supported': 'Projection not supported',
    'notifications_tab': 'Notifications',
    'no_notifications': 'No notifications',
    'map_layers': 'Add a StoryLayer',
    'edit_feature': 'Edit',
    'add_layer_btn': 'Add StoryLayer',
    'add_layers': 'Explore StoryLayers',
    'remove_layer': 'Remove StoryLayer',
    'attributes': 'Attributes',
    'local_geoserver': 'Local Geoserver',
    'filter_layers': 'Filter StoryLayers',
    'add_new_server': 'Add New Server',
    'add_server': 'Add Server',
    'server_type': 'Type',
    'server_name': 'Name',
    'server_url': 'URL',
    'close_btn': 'Close',
    'add_btn': 'Add',
    'merge_results': 'Merge Results',
    'cancel_btn': 'Cancel',
    'done_btn': 'Done',
    'remove_btn': 'Remove',
    'conflict': 'CONFLICT',
    'synchronization': 'Synchronization',
    'synchronization_failed': 'An unknown error occurred when synchronizing.  Please try again.',
    'synchronization_success': 'The repositories have been synchronized.',
    'add_sync': 'Add Sync',
    'merge': 'Merge',
    'config': 'Remote Config',
    'repo': 'Repo',
    'remote': 'Remote',
    'new_remote': 'New Remote',
    'add_remote': 'Add Remote',
    'repo_name': 'Repo Name',
    'remote_name': 'Remote Name',
    'edit_btn': 'Edit',
    'repo_url': 'URL',
    'repo_username': 'Username',
    'repo_password': 'Password',
    'toggle_menu': 'Toggle Menu',
    'single': 'Single',
    'continuous': 'Continuous',
    'into': 'into',
    'error': 'Error',
    'warning': 'Warning',
    'failed_get_capabilities': 'Failed to get capabilities: ',
    'server_url_not_specified': 'Server url is not specified',
    'fixed': 'FIXED',
    'adds': 'Adds',
    'modifications': 'Modifications',
    'deletes': 'Deletes',
    'merges': 'Merges',
    'cancel_merge': 'Cancel the merge',
    'complete_merge': 'Complete the merge',
    'save_btn': 'Save',
    'save_copy_btn': 'Save Copy',
    'single_conflict': '1 conflict remains',
    'multiple_conflicts': '{{value}} conflicts remain',
    'sure_cancel_merge': 'Are you sure you want to cancel the merge process?',
    'sure_commit_merge': 'Are you sure you want to finalize and commit the merge?',
    'commit_merge': 'Commit Merge',
    'added_1_feature': 'Added 1 feature to \'{{layer}}\' via MapLoom.',
    'modified_1_feature': 'Modified 1 feature in \'{{layer}}\' via MapLoom.',
    'modified_x_features': 'Modified {{num}} features in \'{{layer}}\' via MapLoom.',
    'removed_1_feature': 'Removed 1 feature from \'{{layer}}\' via MapLoom.',
    'applied_via_maploom': 'Applied via MapLoom.',
    'conflicts_in': 'Conflicts resolved in \'{{layer}}\'',
    'merged_branch': 'Merged branch \'{{branch}}\'',
    'yes_btn': 'Yes',
    'no_btn': 'No',
    'differences': 'Differences',
    'from': 'From',
    'to': 'To',
    'new_feature': 'New Feature',
    'changed_feature': 'Changed Feature',
    'original_feature': 'Original Feature',
    'removed_feature': 'Removed Feature',
    'merged_feature': 'Merged Feature',
    'location_lon_lat': 'Location ( lon, lat )',
    'show_history': 'Show History',
    'show_table': 'Show Table',
    'show_table_failed': 'An unknown error occurred when retrieving the features. Please try again.',
    'show_heatmap': 'Show Heatmap',
    'show_pics': 'Show Photos',
    'edit_geometry': 'Edit Geometry',
    'edit_attributes': 'Edit Attributes',
    'delete_feature': 'Delete Feature',
    'feature_diff_error': 'Unable to retrieve all the differences for the feature. ' +
        'Check network connection and try again.',
    'no_local_branches': 'Repository had no local branches.',
    'unable_to_get_branches': 'Unable to get the repository\'s branches. Try re-adding the layer.',
    'unable_to_get_remotes': 'Unable to get the repository\'s remotes. Try re-adding the layer.',
    'unable_to_get_datastore': 'Unable to get the datastore.',
    'unable_to_add_remote': 'Unable to add the GeoGig remote: ',
    'unable_to_get_feature_type': 'Unable to get feature type of data store.',
    'unable_to_get_datastore_name': 'Unable to determine the data store name.',
    'layer_was_layer_group': 'Unable to determine if the layer was a layer group.',
    'start_date': 'Start Date:',
    'end_date': 'End Date:',
    'summarize_btn': 'Summarize',
    'anonymous': 'Anonymous',
    'history_failed': 'Failed to fetch the history of the layer. Please try again.',
    'history': 'History',
    'btn_ok': 'OK',
    'summary_of_changes': 'Summary of Changes',
    'too_many_changes': 'There were too many changes to display. If possible, narrow the range.',
    'too_many_changes_refresh': 'Over {{value}} changes were made to the layer.  Check the history for a detailed log.',
    'no_changes_in_time_range': 'No changes were made to the layer in the specified time frame.',
    'no_changes_in_commit': 'No changes were made to the layer in the specified commit.',
    'diff_unknown_error': 'An unknown error occurred while summarizing the differences.  Please try again.',
    'in_lower_case': 'in',
    'to_lower_case': 'to',
    'from_lower_case': 'from',
    'history_for': 'History for {{value}}',
    'drag_zoom_not_supported': 'Drag zoom interaction is not supported on this map.',
    'repository': 'Repository',
    'transaction': 'Transaction',
    'abort': 'Abort',
    'resolve_conflicts': 'Resolve Conflicts',
    'merge_conflicts': 'Merge Conflicts',
    'conflicts_encountered': 'Some conflicts were encountered when performing the operation,' +
        ' would you like to resolve these or abort the merge?',
    'conflict_unknown_error': 'An unknown error occurred when finalizing the transaction.  Please try again.',
    'unable_to_resolve_conflicts': 'Unable to resolve {{value}} conflicts.  Please try again.',
    'merge_unknown_error': 'An unknown error occurred when performing the merge.  Please try again.',
    'merge_successful': 'Merge Successful',
    'merge_no_changes': 'The merge resulted in no changes.',
    'select_date_range': 'Select Date Range',
    'select_start_time': 'Select Start Time',
    'link': 'Link',
    'link_already_exists': 'The link already exists.',
    'synchronize': 'Synchronize',
    'no_email': 'No Email',
    'added': 'Added',
    'removed': 'Removed',
    'modified': 'Modified',
    'feature': 'feature',
    'features': 'features',
    'conflicted_features_resolved': 'Conflicted features resolved: ',
    'id': 'ID',
    'author_name': 'Author Name',
    'author_email': 'Author Email',
    'committer_name': 'Committer Name',
    'committer_email': 'Committer Email',
    'commit_time': 'Commit Time',
    'message': 'Message',
    'export_csv': 'Export CSV',
    'sure_delete_feature': 'Are you sure you want to delete this feature?',
    'drawing_geometry': 'Drawing Geometry',
    'adding_feature': 'Adding Feature',
    'must_create_feature': 'You must create a feature before continuing.',
    'editing_geometry': 'Editing Geometry',
    'save_attributes': 'Save Attributes',
    'invalid_fields': 'There are {{value}} invalid fields, you must fix these problems before you can save.',
    'add_feature': 'Add Feature',
    'toggle_visibility': 'Toggle Visibility',
    'remote_options': 'Remote Options',
    'history_summary': 'History Summary',
    'zoom_world': 'Zoom To World',
    'legend_title': 'Legend',
    'toggle_legend': 'Toggle Legend',
    'refresh_layers': 'Refresh Layers',
    'sure_remove_layer': 'Are you sure that you want to remove this layer?',
    'pull_unknown_error': 'An unknown error occurred when pulling from the remote.  Please try again.',
    'pull_multiple_error': 'Pull has failed multiple times, perhaps the remote is not available at the moment.' +
        ' Please try again later.',
    'pull_timeout_error': 'Pull is taking longer than normal, this could be caused by the server being overloaded so' +
        ' in an effort to let the server catch up we are stopping auto-sync. Please wait before resuming auto-sync so' +
        ' the server can catch up.',
    'local': 'Local',
    'pull_conflicts': 'Pull Conflicts',
    'feature_id': 'Feature ID',
    'table_view': 'Table View',
    'filter_table': 'Filter',
    'clear_table_filter': 'Clear',
    'word_wrap': 'Toggle Word Wrap',
    'go_to_map': 'View on Map',
    'title': 'Title',
    'abstract': 'Abstract',
    'save_this_map': 'Save this map',
    'save_failed': 'Save failed',
    'map_save_failed': 'Map save failed with the following status: {{value}}.',
    'map_save_permission': 'You do not have permission to edit this map.  You may save a copy of the map if ' +
        'you want to keep your changes.',
    'fetch': 'Fetch',
    'fetch_error': 'There was an error trying to fetch from the remote, please try again later.',
    'fetch_timeout': 'Fetch is taking longer than it should, its possible that it is still working so' +
        ' wait a moment before trying again.',
    'repo_not_compatible': 'The specifed repository is not a compatible remote with your repository.',
    'not_a_repo': 'The specified endpoint isn\'t a repository.',
    'could_not_connect': 'Failed to connect to the specified endpoint.',
    'remote_add_success': '{{value}} was successfully added.',
    'remote_edit_success': '{{value}} was successfully changed.',
    'remote_remove': 'Are you sure you want to remove this remote?',
    'no_compatible_repos': 'There were no compatible repositories found at the given url.',
    'continue_btn': 'Continue',
    'remote_already_exists': 'The specified remote already exists on this repo.',
    'remote_add_error': 'There was an error trying to add your remote.',
    'remote_edit_error': 'There was an error trying to edit your remote.',
    'multiple_compatible_repos': 'There were multiple compatible repositories found. Please choose the one you wish' +
        ' to use.',
    'undo_changes': 'Undo Changes',
    'newer_feature_version': 'This feature has been modified since this notification was posted.' +
        '  Would you like to compare with the newest version?',
    'undo_successful': 'Undo Successful',
    'undo_no_changes': 'The merge resulted in no changes.',
    'sure_undo_changes': 'Are you sure you want to undo the changes introduced in this commit? ' +
        '(Note: The change will still be a part of the feature\'s history.)',
    'fixed_feature': 'Fixed Feature',
    'undo_conflicts': 'Undo Conflicts',
    'changes_undone': 'The changes to the feature have been successfully undone.',
    'reverted_changes_to_feature': 'Reverted changes made to {{feature}}.',
    'remote_not_fetched': 'It would appear as though the remote you selected has not' +
        ' been fetched from. We will now attempt to fetch the data you need to create links.',
    'latlon_confirm': '{{value}} is the interpreted value of your coordinates. Is this correct?',
    'degree_minute_second': 'Degrees Minutes Seconds',
    'decimal_degrees': 'Decimal Degrees',
    'other': 'Other',
    'search': 'Search',
    'search_locations': 'Search Locations',
    'search_table': 'Search All Fields',
    'search_results': 'Search Results',
    'search_no_results': 'No results matched the search query.',
    'search_error_status': 'Search failed with response code ({{status}}).',
    'search_error': 'An unknown error occurred while performing the search.',
    'switch_coords': 'Switch Coordinate Display',
    'accept_feature': 'Accept Feature',
    'cancel_feature': 'Cancel Feature',
    'add_to_feature': 'Add To Feature',
    'remove_from_feature': 'Remove From Feature',
    'draw': 'Draw',
    'zoom_to_data': 'Zoom to data',
    'show_layer_info': 'Show Layer Info',
    'workspace': 'Workspace',
    'featuretype': 'FeatureType',
    'keywords': 'Keywords',
    'srs': 'SRS',
    'server': 'Server',
    'credentials': 'Credentials',
    'enter_credentials': 'Please enter your credentials for:',
    'skip_credentials': 'Or you may click Skip to log in anonymously. Only public layer will be visible to anonymous ' +
        'users and changes to those layers will not be associated with a user. It is recommended that you log in if ' +
        'you have credentials for this server.',
    'skip': 'Skip',
    'connected_as': 'Connected as {{value}}.',
    'connect_as': 'Connect as...',
    'branch': 'Branch',
    'layerinfo': 'Layer Info',
    'author_fetch_failed': 'An unknown error occured while determining the authors of the feature.',
    'show_authors': 'Show Authors',
    'right_angles': 'Right Angles',
    'right_angles_failed': 'We weren\'t able to fix your polygon, try to get it closer to a' +
        ' rectangle and try again.',
    'unable_to_save_feature': 'Failed to save the new feature for the following reason: {{value}}',
    'unknown_error': 'An unknown error occurred while saving the feature.',
    'unable_to_save_geometry': 'Failed to save the geometry changes for the following reason: {{value}}',
    'unable_to_save_attributes': 'Failed to save the attribute changes for the following reason: {{value}}',
    'unable_to_delete_feature': 'Failed to delete feature for the following reason: {{value}}',
    'load_server_failed': 'Failed to load the server {{server}} for the following reason: {{value}}',
    'remove_server': 'Are you sure you want to remove this server?',
    'remove_layers_first': 'This server has layers that are on the map, please remove them from the map first.',
    'edit_server': 'Are you sure you want to edit this server?',
    'load_layer_failed': 'Failed to load the layer {{layer}}, this layer will not be added to the map and if you' +
        ' save your map it will not have this layer.',
    'no_attributes': 'There are no attributes to display.',
    'true': 'True',
    'false': 'False',
    'failed_to_add_server': 'There was a problem trying to connect to the server you specified, check the url and' +
        ' credentials to make sure they are correct before trying again.',
    'failed_to_save_features': 'The features failed to save, please try to save again before closing' +
        ' the table or you will lose work.',
    'server_connect_failed': 'We were unable to connect to this server, would still like to add this server?',
    'disabled_layer': 'Layer is Disabled',
    'missing_layers_merge': 'There are {{count}} feature(s) involved in the merge that are not part of the map.  ' +
        'In order to get the most accurate schema information for that layer, it is recommended that you cancel the ' +
        'merge, add the missing layers, and try again. Missing layer(s): ',
    'advanced_filters': 'Advanced Filters',
    'basic_filters': 'Basic Filters',
    'apply_filters': 'Apply Filters',
    'clear_filters': 'Clear Filters',
    'previous_page': 'Previous Page',
    'next_page': 'Next Page',
    'current_page': 'Page {{currentPage}} of {{totalPages}}',
    'filter': 'Filter by Attribute:',
    'merge_commit': 'Merge Commit',
    'always_anonymous': 'Always Log On Anonymously',
    'script_error': 'The following script error has occurred: "{{error}}".  It is recommended that you reload the ' +
        'web page to resolve any potential complications.',
    'show_changes': 'Show Changes',
    'sure_close_table': 'Are you sure you want to close the table?  Any unsaved changes will be lost.',
    'toggle_fullscreen': 'Toggle Full Screen',
    'since_time': 'Running since {{time}}',
    'unread_notifications': 'Unread Notifications',
    'generate_notification': 'Generate Notification',
    'no_layers_notification': 'Generating a notification requires a GeoGig layer to function.  ' +
        'Please add a GeoGig layer to the map.',
    'single_sync': 'Perform Synchronization',
    'continuous_sync': 'Toggle Auto-Synchronization',
    'statistics_view': 'View Statistics',
    'exact_match': 'Exact Match',
    'range': 'Range',
    'contains': 'Contains',
    'minimum': 'Minimum',
    'maximum': 'Maximum',
    'mean': 'Mean',
    'median': 'Median',
    'sum': 'Sum',
    'variance': 'Variance',
    'standard_deviation': 'Standard Deviation',
    'count': 'Count',
    'populated_count': 'Populated Count',
    'unique_values': 'Unique Values',
    'fetch_layers_from_server': 'Fetch Layers from Server',
    'map_storybox': 'StoryBoxes',
    'add_storybox_btn': 'Add StoryBox',
    'add_storybox': 'Add StoryBox',
    'edit_box': 'Edit StoryBox',
    'remove_storybox': 'Remove StoryBox',
    'show_storybox_info': 'Show StoryBox Info',
    'zoom_to_storybox': 'Zoom to StoryBox',
    'remove_box': 'Remove StoryBox',
    'box_info': 'StoryBox Information',
    'sure_remove_box': 'Are you sure you want to remove this StoryBox?',
    'style_layer': 'Style StoryLayer',
    'show_attributes': 'Show Attributes',
    'remove_pin': 'Remove StoryPin',
    'sure_remove_pin': 'Are you sure you want to remove this StoryPin?',
    'start_time': 'Start Time',
    'end_time': 'End Time',
    'content': 'Content',
    'geometry': 'Pin Location',
    'extent': 'Extent',
    'saveChapterView': 'Chapter View has been saved',
    'saveViewTitle': 'Chapter View Saved',
    'composer_save_draft_tooltip': 'Save Draft',
    'composer_publish_tooltip': 'Publish MapStory',
    'composer_properties_tooltip': 'MapStory Properties',
    'composer_preview_tooltip': 'Preview MapStory',
    'add_new_chapter_tooltip': 'To build a new chapter, create it here and then add Chapter Info, StoryLayers, StoryBoxes, and StoryPins.',
    'chapter_info_tooltip': 'Chapter Info is the content (text, images, videos) that helps the viewer understand what your chapter is all about.',
    'storylayers_tooltip': 'StoryLayers are the spatial-temporal data that forms the basis of your MapStory.',
    'storylayer_visibility_tooltip': 'Temporarily turn on and off the visibility of a layer.',
    'storylayer_style_tooltip': 'Select a Style to use for your StoryLayer. Currently MapStory supports 4 different style options: Simple, Unique, Graduated and Chloropleth. To learn more about each of these style types, go to ‘Styling Help below.',
    'storylayer_symbol_tooltip': 'Choose the color and size that you’d like for your StoryLayer features.',
    'storylayer_stroke_tooltip': 'Choose the color and thickness of the border lines (or “stroke”) for your features.',
    'storylayer_label_tooltip': 'If you want any text (or “labels”) associated with an attribute in the StoryLayer to appear next to the feature, you can select it here.',
    'storylayer_view_feature_tooltip': 'View the feature on the map.',
    'storylayer_view_author_tooltip': 'View the Storyteller that made the change.',
    'storylayer_show_difference_tooltip': 'Show a before & after view of the change.',
    'storylayer_revert_tooltip': 'Revert a change back to a previous state.',
    'storylayer_alias_tooltip': 'Create a StoryLayer Alias to control how the StoryLayer is referred to in your legend.',
    'storylayer_attributes_tooltip': 'Decide which attributes from your StoryLayer you want to appear when a viewer clicks on a feature, and  decide how you want to refer to the feature. Ideally, you will use a simple description that anyone can understand.',
    'storyboxes_tooltip': 'StoryBoxes let you change the zoom level of the map as your MapStory moves through time.',
    'storypins_tooltip': 'StoryPins are pop-ups on the map that your viewers can click on while your MapStory plays. StoryPins help you add more context to your MapStory, and can include text or embedded media (like a YouTube video or Wiki Commons image).',
    'chapter_title_tooltip': 'Give your chapter a nice short title.',
    'chapter_summary_tooltip': 'Your chapter summary should explain to your viewers what you want them to learn from your Chapter.',
    'choose_your_basemap_tooltip': 'You’ll want to pick the basemap best suited for your MapStory. For example, a MapStory about the environment might use Natural Earth, while one about cities might use OpenStreetMap.',
    'storybox_title_tooltip': 'Your StoryBox title will appear in the timeline.',
    'storybox_map_extents_tooltip': 'Map bounds are like the border of your map.',
    'storybox_time_frame_tooltip': 'Every StoryBox needs a start time and an end time.',
    'storypin_title_tooltip': 'Give your StoryPin a short and descriptive title.',
    'storypin_content_tooltip': 'Type the text you want associated with your StoryPin here. If you want to embed an image or video, paste the embed link in the next box.',
    'storypin_time_frame_tooltip': 'Giving your StoryPin a start and end time will ensure it only appears during that time frame. If you don’t provide a start and end time, it will appear for the duration of your chapter.',
    'storypin_options_tooltip': 'Decide if you want your StoryPin to appear on the map the timeline, or both.',
    'layer_load_failed': 'Layer failed to load',
    'load_failed': 'Load Failed'
  };

  var module = angular.module('loom_translations_en', ['pascalprecht.translate']);

  module.config(function($translateProvider) {
    $translateProvider.translations('en', translations);
  });

}());
