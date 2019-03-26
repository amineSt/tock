package fr.vsct.tock.bot.connector.teams.messages

import com.microsoft.bot.schema.models.CardAction
import com.microsoft.bot.schema.models.CardImage
import fr.vsct.tock.bot.connector.teams.teamsConnectorType
import fr.vsct.tock.bot.engine.BotBus
import fr.vsct.tock.bot.engine.I18nTranslator

fun BotBus.withTeams(messageProvider: () -> TeamsBotMessage): BotBus {
    return withMessage(teamsConnectorType, messageProvider)
}

fun I18nTranslator.teamsMessage(
    text: String
) : TeamsBotTextMessage = TeamsBotTextMessage(text)

fun I18nTranslator.teamsMessageWithButtonCard(
    urlText: String,
    links: List<CardAction>
) : TeamsCardAction = TeamsCardAction(urlText, links)

fun I18nTranslator.teamsHeroCard(
    title: String,
    subtitle: String? = null,
    attachmentContent: String,
    images: List<CardImage>? = null,
    buttons: List<CardAction>? = null,
    tap: CardAction? = null
) : TeamsHeroCard = TeamsHeroCard(title, subtitle, attachmentContent, images, buttons, tap)