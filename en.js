/**
 * Ce fichier à été généré pour la dernière fois le 20/11/2021 à 17:31:47 par le script de génération de fichier langue.
 * Si celui-ci ne comporte pas les textes des dernières versions, pensez à le régénérer, ou demandez à qqn d'autre de le faire (sur le salon "traductions" du serveur Discord).
 *
 * @version 1.0.0 - Version du générateur
 * @language en
 * @default fr
 */

module.exports = {
    infos: {
        public: true,
        language_code: "en",
        language_name: "English",
        language_flag: "🇬🇧",
        default: false
    },
    general: {
        error_no_stats_short_title: "Thanks for adding Server Analytics !",
        error_no_stats_short_content: "But in order to display statistics, I need to **configure** myself and start **saving** this server's data...\n> Time left:",
        error_no_stats_short_image: "https://i.imgur.com/qtkhzMX.png",
        error_no_stats_title: "Not enough data...",
        error_no_stats_content: "Before displaying and generating projections, I need to **fetch** enough data...\n> Estimated time remaining:",
        error_no_stats_image: "https://i.imgur.com/qtkhzMX.png",
        cooldown_long_title: "You're in cooldown...",
        cooldown_long_content: "**Enabling the ServerPremium** will allow all members to use this command without any limit !\n\n*The use of artificial intelligence consumes a lot of resources, support our project by enabling the premium !",
        cooldown_long_timer_name: "Time Remaining",
        cooldown_long_timer_content: "You can use the command again in",
        cooldown_long_shop_name: "Shop",
        cooldown_long_shop_content: "[` Our shop `](https://discordanalytics.fr/client/user?action=shop) *instructions below!*\n[` Join our Server `](${clientConnection.config.support.invite}) *giveaways and bonuses!*",
        cooldown_long_image: "https://i.imgur.com/pJFcBi8.png",
        cooldown_short_displayed_text: "Cooldown!** You must wait ${cooldownDelay} seconds between each command !",
        command_maintenance_text: "🚧** • Maintenance »** Server Analytics is in maintenance for another ` ${mtnc.duration} `",
        command_maintenance_lagprv_text: "🔥** • Overloaded Network »** Server Analytics is currently overused, try again in about  ` ${mtnc.duration} `",
        command_maintenance_details: "Details:",
        months_list: {
            "1": "January",
            "2": "February",
            "3": "March",
            "4": "April",
            "5": "May",
            "6": "June",
            "7": "July",
            "8": "August",
            "9": "September",
            "10": "October",
            "11": "November",
            "12": "December"
        },
        time_names: {
            days: [
                " day",
                " days",
                "d"
            ],
            hours: [
                " hour",
                " hours",
                "h"
            ],
            minutes: [
                " minute",
                " minutes",
                " min"
            ],
            seconds: [
                " second",
                " seconds",
                "s"
            ]
        },
        command_maintenance_text_3: "🏳️** • Data processing »** Server Analytics is currently processing all the statistics that have been recorded **today**, to avoid a network overload and ensure the continuity of our services, come back in ` ${mtnc.duration} `"
    },
    help: {
        help_embed_title: "Server Analytics help page",
        help_embed_field1_name: "Server statistics",
        help_embed_field1_content: "`${prfx}stats` - Server detailed statistics\n> `${prfx}top` - Server members leaderboards\n> `${prfx}graph` - Generate charts\n> `${prfx}forecast` - Forecasts\n> `${prfx}trends` - Server activity trends\n> `${prfx}objectives` - Server objectives and records",
        help_embed_field2_name: "Personal statistics",
        help_embed_field2_content: "`${prfx}me` - Display your statistics on this server\n> `${prfx}u [@member]` - Display the statistics of a member",
        help_embed_field3_name: "Other commands",
        help_embed_field3_content: "`${prfx}counter` - Create and manage counter channels\n> `${prfx}invite` - Invite the bot on your server\n> `${prfx}set` - Modify Server Analytics configuration",
        help_embed_field4_name: "Important links",
        help_embed_field4_content: "[`Website`](https://discordanalytics.fr) • [`Our Server`](https://discord.gg/g62eVMr) • [`Invite the bot`](https://cutt.ly/regmeY2)",
        help_embed_field4_premium_since: "ServerPremium for",
        help_embed_field4_get_premium: "**» Not yet premium?** *Type s.premium*",
        help_embed_author: "Asked by"
    },
    enable: {
        enable_error_access: "Whoops!** Command access is reserved for Administrators and Managers of Server Analytics.",
        enable_error_not_exist: "The specified activation key does not exist or has already been claimed...",
        enable_error_expired: "The specified activation key has expired and can no longer be used...",
        enable_error_already_claimed: "This server has already activated this command! Use your activation key on another server.",
        enable_error_command_not_exist: "It looks like this command no longer exists or is now public...",
        enable_list_error_no_key: "No activation key has been activated on this server...",
        enable_list_embed_description: "List of commands activated by activation key on this server",
        enable_list_embed_title: "Activated commands on this server",
        enable_list_embed_activated_cmds: "Activated commands:",
        enable_list_embed_activated_cmds_content: "This server has **${x}** activated commands:",
        enable_list_embed_privileges: "Activated privileges:",
        enable_list_embed_privileges_count: "This server has **${x}** activated privileges:",
        enable_list_embed_privileges_empty: "*No activated privileges on this server*",
        enable_premium_success: "**» All set!** You have activated the **ServerPremium** on this server until",
        enable_premium_success_msg: "*All the advantages should be activated in less than **240s***",
        enable_premium_success_alt: "**» All set!** You have extended your **ServerPremium** subscription until",
        enable_privilege_update: "**» All set!** Server Privileges have been updated!"
    },
    forecast: {
        loading_message_prefix: "Loading",
        loading_message_ai: "Initialising the **IA** model and training.",
        loading_messages_maths: "Calculating and generating forecasts...",
        graph_name_ai_process: "Predictive analysis by Artificial Intelligence",
        graph_name_maths_process: "Predictive analysis by using mathematical process",
        forecast_help_title: "Statistic forecast of",
        forecast_help_description: "**Project yourself into the future** using our Artificial Intelligence and statistical analysis.",
        forecast_help_cmd_members_maths: "Member growth forecast on this server",
        forecast_help_cmd_members_ai: "**Artificial Intelligence**\n> *Predictive analysis by IA of member growth on this server.*\n> ⚠ Slow and not precise: not recommended",
        forecast_help_footer_name: "🧪 • Experimental Command",
        forecast_message_completed: "**» Done !** Forecast generated in **${time}** s."
    },
    set: {
        set_updated_config: "Server configuration updated!",
        set_lang_list_title: "Change the bot language",
        set_lang_list_description: "Change the bot language by typing `${prfx}set lang [language]`, for example `${prfx}set lang en` to set the server language to English.",
        set_lang_error_wrong_countrycode: "The given language doesn't exist or isn't yet available ! Possible inputs:",
        set_lang_update_embed_title: "Bot language updated !",
        set_lang_update_embed_content: "Commands will now be displayed in",
        set_compare_disabled: "**Alrignt!** It's now **impossible** for other servers to compare their statistics with yours. *Retype the command to re-enable the feature.*",
        set_compare_enabled: "**Alright!** It's once again **possible** to compare your server statistics. *Retype the command to disable the feature.*",
        set_help_embed_title: "Configuration of ${botName}",
        set_help_embed_allowCompare: "Allow/deny other servers to compare your statistics",
        set_help_embed_hoverColor: "Change the background colour when hovering over the server on our website",
        set_help_embed_lang: "Change the language of Server Analytics. (Passer en français)",
        set_help_embed_reset: "Reset your statistics or the server's statistics.",
        set_reset_embeds_title: "Statistics reset",
        set_reset_select_type_descr: "Before starting, you must chose what statistics category you want to delete:\n\n> • **Personal statistics:** will only affect your stats, other users will have no loss.\n> • **Server statistics:** will affect server stats and all of its members (including you!).",
        set_reset_select_buttons: [
            "Personal stats",
            "Server stats"
        ],
        set_reset_select_stats_descr: "**Warning!** This action is __irreversible__, in turn, make sure to know what you're doing!\n\nHowever, if you're **110%** sure you want to do this action, select the **different** statistics to **reset** in the dropdown menu.",
        set_reset_select_stats_placeholder: "Statistics to reset..",
        set_reset_recap_desc: "**Overview:** You're about to **delete** the data written below. **NOTE** that entries aren't updated, but completely **deleted**; so unrecoverable!",
        set_reset_recap_confirm: "CONFIRM",
        set_reset_success_message: "**Done..** Selected statistics should be deleted shortly.",
        set_reset_dropdown_options: {
            members_stats: [
                "Member stats",
                "ALL server members' statistics.",
                [
                    "/",
                    "ALL members will have their stats reset!"
                ]
            ],
            global_stats: [
                "Global stats",
                "Overall number of messages, overall time in VCs, etc..",
                [
                    "You will lose your place in rankings!",
                    "EVERYTHING will be reset; premium, activation keys, etc.."
                ]
            ],
            temporal_stats: [
                "Temporary statistics",
                "Graphs, statistics on N days."
            ],
            voice_sessions: [
                "VC sessions",
                "VC sessions history"
            ],
            temp_leaderboards: [
                "Temporary rankings",
                "Rankings on 24h, 7d et 28d."
            ],
            objectives: [
                "Objectives",
                "Server objectives and records."
            ]
        }
    },
    stats: {
        stats_error_compare_not_exist: "The ID entered isn't for a valid server or Server Analytics isn't on it...\n> **How to find the ID ?** https://i.imgur.com/IsSzZ2O.png",
        stats_error_compare_disabled: "You're trying to compare your statistics with a server that doesn't allow this feature...\n> 💡 **»** *You can also refuse to be compared by typing `${prfx}set allowCompare`.*",
        stats_error_compare_not_member: "For confidentiality reasons, you must be a member of the server you wish to compare to make a comparison.",
        stats_error_restricted_premium: "This statistical table is only available to servers with Server Premium. For more info, type ` s.premium `",
        stats_error_restricted_dev: "Access to this statistical table has been restricted. It may be under maintenance or being created... Come back later !",
        stats_error_no_datas: "I'm running out of statistics! Just give me a few minutes to start collecting server statistics...",
        stats_error_empty_board: "The format of the statistics table is incorrect: No statistics to display...",
        stats_error_unknown_method: "The custom static method entered on the object doesn't exist, check the array structure.",
        stats_embed_title: "Statistical table",
        stats_embed_compared_with: "Statistics compared with",
        stats_embed_compare_instr: "Compare with another server",
        stats_embed_content_chart_timerange: "The last 6 days",
        stats_embed_content_empty_logs: "You haven't joined any voices in the last 31 days.",
        stats_embed_chart_default_name: "Graph of Sent Messages",
        stats_embed_footer: "Generated in",
        stats_help_embed_title: "Statistics panels of ${guildName}",
        stats_help_embed_description: "**View your statistics** and server statistics using the standard and custom panels.",
        stats_help_embed_field_your_boards: "Your statistics panels",
        stats_help_embed_field_your_boards_empty: "**Whoops !** It's not yet possible to create your own statistical tables... Come back later!",
        stats_help_embed_footer: "Experimental command",
        stats_boards_slash_names: [
            "messages",
            "members",
            "voice"
        ],
        stats_board_messages_category1: "Sent Messages",
        stats_board_messages_category2: "Mentions and Activity",
        stats_board_messages_category3: "Deleted and average",
        stats_board_messages_category1_subcategory1: "✉ • Sent Messages:",
        stats_board_messages_category1_displayedText: "\n> **You »**",
        stats_board_messages_category1_subcategory2: "📊 • Graph:",
        stats_board_messages_category2_subcategory1: "📌 • Pings:",
        stats_board_messages_category2_subcategory2: "👥 • Active Members:",
        stats_board_messages_category3_subcategory1: "🗑 • Deleted:",
        stats_board_messages_category3_subcategory1_unitName: "Delted",
        stats_board_messages_category3_subcategory2: "📋 • On average:",
        stats_board_messages_category3_subcategory2_displayedText: "> `{%a%}` messages/**month**\n> `{%b%}` messages/**day**\n> `{%d%}` messages/**hour**\n> `{%c%}` messages/**member**",
        stats_board_members_category1: "Member Count",
        stats_board_members_category2: "Leaves and joins",
        stats_board_members_category3: "Graphs",
        stats_board_members_category1_subcategory1: "👥 • Growth:",
        stats_board_members_category1_subcategory1_displayedText: "> Members",
        stats_board_members_category1_subcategory1_unitName: "members",
        stats_board_members_category1_subcategory2: "📋 • On average:",
        stats_board_members_category1_subcategory2_displayedText: "*New members:*\n> `+ {%a%}` membres/**month**\n> `+ {%b%}` membres/**day**\n> `+ {%d%}` membres/**hour**",
        stats_board_members_category2_subcategory1: "<:ji:856170053836734525> • Joined:",
        stats_board_members_category2_subcategory1_unitName: "joins",
        stats_board_members_category2_subcategory2: "<:li:856170054101106768> • Left:",
        stats_board_members_category2_subcategory2_unitName: "left",
        stats_board_members_category3_subcategory1: "📈 • Joins:",
        stats_board_members_category3_subcategory2: "📉 • Leaves:",
        stats_board_voice_category1: "Voice stats",
        stats_board_voice_category2: "Your Voice Statistics",
        stats_board_voice_category3: "VC Sessions",
        stats_board_voice_category1_subcategory1: "🔊 • Time spent in VC:",
        stats_board_voice_category1_subcategory1_displayText: "\n> **You »** ",
        stats_board_voice_category1_subcategory2: "📊 • Graph:",
        stats_board_voice_category2_subcategory1: "👥 • Time spent in VC:",
        stats_board_voice_category2_subcategory2: "📊 • Graph:",
        stats_board_voice_category3_subcategory1: "📚 • Your last VC sessions:"
    },
    invite: {
        invite_message_title: "Invite ${botName}",
        invite_message_add_bot: "Invite the bot",
        invite_message_dashboard: "Dashboard",
        invite_message_discord_server: "Support Server"
    },
    graph: {
        graph_error_no_datas: "I haven't collected enough statistics to generate a graph... Come back later :(",
        graph_error_low_timerange: "It is not yet possible to display charts for a period less than **6 days**",
        graph_error_high_timerange: "It is not yet possible to display charts for a period longer than **9999 days**",
        graph_error_premium_timerange: "Only servers with an active premium subscription can display stats for periods longer **31 days**!",
        graph_help_embed_title: "Generate a graph",
        graph_help_embed_content: "Display a **${x}-days** chart:",
        graph_help_embed_available_graphs: "Available graphs",
        graph_list: {
            messages: {
                type: "guild",
                graphName: "Graph on sent messages",
                graphDescription: "Graph showing sent messages on this server.",
                columnName: "messages"
            },
            members: {
                type: "guild",
                graphName: "Graph on member growth",
                graphDescription: "Graph showing the member growth of this server.",
                columnName: "membres",
                processMethod: "set"
            },
            mentions: {
                type: "guild",
                graphName: "Graph on pings",
                graphDescription: "Graph showing the total amount of pings on this server.",
                columnName: "mentions"
            },
            myMessages: {
                type: "user",
                graphName: "Graph on your messages sent",
                graphDescription: "Graph showing the number of messages you sent in this server.",
                columnName: "messages"
            },
            voiceTime: {
                type: "guild",
                graphName: "Graph on time spent in VC",
                graphDescription: "Graph showing time spent in Voice Channels on this server.",
                columnName: "voice_time",
                format: "time",
                normalizeFactor: 1000
            }
        },
        graph_help_embed_interaction_placeholder: "Select a graph to display.."
    },
    top: {
        top_error_invalid_timerange: "You must specify a valid duration, for the moment the possible entries are: `24h`` 7d` and `28d`.",
        top_error_invalid_user_id: "The `ID` entered is not valid: (\ n> ** How do I find the ID? ** https://i.imgur.com/IsSzZ2O.png",
        top_error_user_id_not_found: "Could not find the user you are looking for, try again with a valid `ID`!",
        top_general_message_unitName: "messages",
        top_general_your_rank: "Your rank:",
        top_category_global_title: "Global Leaderboards",
        top_category_messages_name: "Messages Sent",
        top_category_voice_name: "Time spent in voice",
        top_category_ranks_name: "Positions and progressions",
        top_category_ranks_prtg_top: "Top `${x}%`", // Top xx.xx% du serveur
        top_category_ranks_messages_until: "messages left until", // Messages left until position #x-1
        top_category_ranks_voice_until: "until", // <Time left> until position #x-1
        top_category_ranks_messages_until_alt: "messages left until", // Messages left until position #1
        top_category_ranks_voice_until_alt: "until", // <Time left> until position #1
        top_category_ranks_user_first: "You are **1st** in this server !",
        top_embed_author: "Rankings for",
        top_embed_description_title: "Global leaderboards for all server members.",
        top_embed_description_instructions: "Display **28d**, **7d** et **24h** leaderboards: ` ${prfx}top [ 28d | 7d | 24h ]`\n> <:ps:856186498377187348> Ranks of a member: `${prfx}top [ID]`",
        top_embed_description_timerange: "Server Ranking", // Server leaderboard <these last x days>
        top_embed_description_reset: "Reset", // Reset <daily to xx: xx>
        top_embed_description_instructions_user_top: "User ranking: `${prfx}top [ID]`",
        top_user_top_not_available: "<:ji:856170053836734525> **It's not yet available! ** Competitions, performances and more are coming soon! To be informed in advance of all the news, join our Discord Server » https://discord.gg/g62eVMr",
        timeranges_names: {
            "1": [
                "these last 24 hours",
                "on 24h",
                "today",
                "every day at 00:00 (UTC)"
            ],
            "7": [
                "these last 7 days",
                "on 7d",
                "this week",
                "every saturday at 00:00 (UTC)",
            ],
            "28": [
                "these last 28 days",
                "on 28d",
                "this month",
                "every 1st of the month at 00:00 (UTC)",
            ],
        }
    },
    me: {
        me_card_header_createdAt: "Signed up",
        me_card_header_joinedAt: "Joined on",
        me_card_unit_messages: "Messages Sent",
        me_card_unit_in_vc: "In Voice Chat",
        me_card_top_global_unit: "Rank",
        me_card_daily_top_rank_global_unit: "Today",
        me_stat_box_messages_sent: "Messages Sent",
        me_stat_box_voice_time: "Time spent in VC",
        me_stat_box_mentions: "Mentions",
        me_stat_box_mentionned: "Mentionned",
        me_stats_box_leaderboards: "Leaderboards",
        me_stats_box_ranks: "Activity Ranks",
        me_stats_box_message_graph: "Graph",
        me_stats_box_ranksNames: {
            X: "No data",
            F: "Verry little activity",
            "F+": "Verry little activity",
            "D-": "Not very active",
            D: "Not very active",
            "D+": "Not very active",
            "C-": "Passively Active",
            C: "Passively Active",
            "C+": "Passively Active",
            "B-": "Rather Active",
            B: "Rather Active",
            "B+": "Active",
            "A-": "Very active",
            A: "Very active",
            "A+": "Strong activity"
        }
    },
    counter: {
        counter_error_bot_permission: "**Not enough permissions!** The bot doesn't have the needed permissions to **gérer les compteurs**. Requiert `MANAGE_CHANNELS`.",
        counter_error_user_permission: "**Whoops!** This command is only for server staff.. (requires `MANAGE_GUILD`).",
        counter_help_empty_title: "Create a stat counter",
        counter_help_empty_description: "This server didn't configure any **counters**. *Click on the button below to create one.*",
        counter_help_empty_button: "Create a counter",
        counter_help_empty_image: "https://i.imgur.com/iAYFGLq.png",
        counter_create_cancel_message: "**Canceled!** The counter creation has been canceled.",
        counter_list_embed_title: "Compteurs Statistiques",
        counter_list_embed_description: "To create, edit or delete a counter, use the buttons below.",
        counter_list_embed_field_title: "[{counter} / {max}] Counter list:",
        counter_list_buttons_delete: "Delete",
        counter_list_buttons_edit: "Edit",
        counter_max_reached_embed_title: "Counter limit reached..",
        counter_max_reached_embed_description: "**You reached the counter limit..**\n> • To create one, delete an existing counter.\n> • Get **premium** for your server to benefit from more counters and other advantages!\n> • Join our **server** and participate in our giveaways.\n\n<:l_:855936761436176404> **[Click here to get premium](https://discordanalytics.fr/client/premium.php)**",
        counter_max_reached_embed_image: "https://i.imgur.com/0WzeRWE.png",
        counter_max_reached_embed_button_premium: "Become Premium",
        counter_max_reached_embed_button_discord: "Discord Server",
        counter_delete_channel_reason: "Counter deletion by {user}",
        counter_delete_message: "**Done!** The selected counter(s) have been deleted.",
        counter_edit_embed_title: "Edit a counter",
        counter_edit_embed_title_delete: "Delete a counter",
        counter_edit_embed_description: "**Edit** a counter by selecting it in the **dropdown menu** down below.",
        counter_edit_embed_description_delete: "**Delete** one or multiple counters by selecting them in the **dropdown menu** below.",
        counter_edit_embed_placeholder: "Select a counter",
        counter_edit_embed_select_prefix: "Counter #",
        counter_edit_embed_select_topic: "# topic",
        counter_edit_embed_select_cancel: "Cancel",
        counter_edit_embed_select_cancel_descr: "Select to cancel",
        counter_edit_embed_cancel_message: "**Canceled selection!** You can use the command again.",
        counter_create_step1_title: "Counter type",
        counter_create_step1_description: "Choose the counter type you want to create.",
        counter_create_step1_image: "https://i.imgur.com/qYAOyg4.png",
        counter_create_step1_interaction_placeholder: "Select counter type..",
        counter_create_step1_select_title_category: "Choose a category",
        counter_create_step1_select_title_topic: "Choose a channel",
        counter_create_step1_select_description_category: "**Enter** the id of the category to edit. *Type **stop** to cancel.*",
        counter_create_step1_select_description_topic: "**Mention** the channel to edit the topic. *Type **stop** to cancel.*",
        counter_create_step1_select_image_category: "https://i.imgur.com/UhWpcGT.png",
        counter_create_step1_select_image_topic: "https://i.imgur.com/CVKaZAS.png",
        counter_create_step1_select_error_notexists_category: "**Error!** The ID entered does not belong to any category. *Make sure you have copied it correctly.*",
        counter_create_step1_select_error_notexists_topic: "**Error!** The mentioned channel does not exist or is not accessible by the bot. *Make sure you have mentioned it correctly.*",
        counter_create_step1_select_error_notcategory_category: "**Error!** The ID entered is not a category ID, but a voice/text channel ID. *Make sure you have copied it correctly.*",
        counter_create_step1_select_error_nottext_topic: "**Error!** The mentioned channel is not textual. *Make sure you have mentioned it correctly.*",
        counter_command_already_running: "One step at a time!** Another user is currently configuring a counter in this channel. Ask them to type `stop` or finish their counter.",
        counter_create_step1_options: {
            voice: [
                "Voice Chat",
                "<:vc:891320179533950986>"
            ],
            category: [
                "Category",
                "<:ctg:891320722302062603>"
            ],
            topic: [
                "Channel Topic",
                "<:txt:891320180066635787>"
            ]
        },
        counter_create_step2_title: "Counter content",
        counter_create_step2_description: "The content is the text shown in the counter **Max length for `{type}`: {max} characters.** *Type **stop** to cancel.*",
        counter_create_step2_image: "https://i.imgur.com/LHHs5dn.png",
        counter_create_step2_notag_error: "**Error!** The sent answer does not contain any statistic tag. **Send a valid answer!** *Type **stop** to cancel.*",
        counter_create_step2_notag_image: "https://i.imgur.com/3673sfF.png",
        counter_create_step2_toolong_error: "**Error!** The counter is too long, please retry while using maximum **{max}** letters. *Type **stop** to cancel.*",
        counter_create_voice_channel_reason: "New statistic counter (requested by {user})",
        counter_create_text_channel_reason: "New counter in channel (requested by {user})",
        counter_create_success_title: "New counter created with success",
        counter_create_success_description: "**Counter created !** The counter `{name}` will now show statistics.",
        counter_create_success_image: "https://i.imgur.com/s3UEC3c.png",
        counter_edit_success_title: "Counter edited with success",
        counter_edit_success_description: "**Compteur edited !** The counter `{name}` has been edited with success.",
        counter_edit_success_image: "https://i.imgur.com/6fnlEAp.png"
    },
    objectives: {
        objectives_main_embed_title: "Objectives and records",
        objectives_main_embed_description: "View server **objectives** and **records**.\n<:pl:856170070141304832> **Once reached,** objectives will update **automatically**.\n:clock10: *Timezone: `{timezone}`*",
        objectives_field_objective_title: "Objectives",
        objectives_field_objective_prefix: "Objective:",
        objectives_field_objective_progression: "Progression:",
        objectives_field_objective_last_reached: "**{objective(n-1)}** {unit} reached the {timestamp[-1]}",
        objectives_field_objective_never_reached: "The objective has never been reached yet!",
        objectives_field_objective_list: {
            members: {
                name: "members",
                emoji: "👥"
            },
            messages: {
                name: "messages",
                emoji: "💬"
            }
        },
        objectives_field_records_title: "Records",
        objectives_field_records_prefix: "{statUnit} record",
        objectives_field_objective_recval: "Record of `{recval}` {statUnit} {timerange}",
        objectives_field_objective_timestamp: "Record reached on the {timestamp}",
        objectives_field_objective_timestamp_beaten: "**New record!** Record beaten today.",
        objectives_field_objective_timestamp_never_beaten: "No record has been set yet.",
        objectives_field_records_list: {
            members: {
                name: "members",
                displayed_name: "new members",
                emoji: "👥",
                timerange: "in 24 hours" 
            },
            messages: {
                name: "messages",
                displayed_name: "messages",
                emoji: "💬",
                timerange: "in 24 hours"
            },
            voice: {
                name: "membres en vc",
                displayed_name: "members in vc",
                emoji: "🔊",
                timerange: "simultaneously"
            }
        }
    },
    _FILE_UPDATES_INFO: {
        last_update_timestamp: 1637425907525,
        last_update_date: "20/11/2021",
        last_update_filegenerator_version: "1.0.0"
    }
}
