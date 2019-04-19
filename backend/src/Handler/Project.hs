{-# LANGUAGE ExtendedDefaultRules #-}
{-# LANGUAGE OverloadedStrings    #-}
{-# LANGUAGE QuasiQuotes          #-}
{-# LANGUAGE TemplateHaskell      #-}
{-# LANGUAGE TypeFamilies         #-}

module Handler.Project where

import Import

getProjectR :: Handler Value
getProjectR = do
    projects <- runDB $ selectList [] [] :: Handler [Entity Project]
    renderUrl <- getUrlRender
    projects <- return $ fmap (\(Entity projectId project) ->
                                    object [ "id" .= projectId
                                           , "title" .= projectTitle project
                                           , "summary" .= projectSummary project
                                           , "url" .= renderUrl ProjectR
                                           ])
                              projects
    sendStatusJSON ok200 $ projects

postProjectR :: Handler Value
postProjectR = do
    project <- requireJsonBody :: Handler Project
    projectId <- runDB $ insert project
    renderUrl <- getUrlRender
    sendStatusJSON created201 $ object [ "id" .= projectId
                                       , "title" .= projectTitle project
                                       , "summary" .= projectSummary project
                                       , "url" .= renderUrl ProjectR
                                       ]
