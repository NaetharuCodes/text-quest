-- CreateEnum
CREATE TYPE "InteractionType" AS ENUM ('INVESTIGATE', 'SEARCH', 'READ', 'LISTEN', 'TAKE', 'USE', 'PUSH_PULL', 'OPEN_CLOSE', 'CLIMB', 'BREAK', 'SPEAK', 'TRADE', 'GIVE', 'THREATEN', 'STEAL', 'CAST_SPELL', 'HIDE', 'COMBINE');

-- CreateEnum
CREATE TYPE "CreatureType" AS ENUM ('HUMANOID', 'BEAST', 'UNDEAD', 'DEMON', 'ELEMENTAL', 'CONSTRUCT', 'DRAGON', 'FAE');

-- CreateEnum
CREATE TYPE "SpellSchool" AS ENUM ('TIME', 'SPACE', 'MIND', 'MATTER');

-- CreateTable
CREATE TABLE "Adventure" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Adventure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Scene" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "adventureId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Scene_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PointOfInterest" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "interactionType" "InteractionType" NOT NULL,
    "itemData" JSONB,
    "dialogueData" JSONB,
    "spellData" JSONB,
    "sceneId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PointOfInterest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Spell" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "school" "SpellSchool" NOT NULL,
    "level" INTEGER NOT NULL,
    "effect" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Spell_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "adventureId" TEXT NOT NULL,
    "dialogue" JSONB,
    "inventory" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Creature" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "CreatureType" NOT NULL,
    "adventureId" TEXT NOT NULL,
    "stats" JSONB NOT NULL,
    "drops" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Creature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SceneConnections" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CharacterToScene" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CreatureToScene" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Spell_name_key" ON "Spell"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_SceneConnections_AB_unique" ON "_SceneConnections"("A", "B");

-- CreateIndex
CREATE INDEX "_SceneConnections_B_index" ON "_SceneConnections"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToScene_AB_unique" ON "_CharacterToScene"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToScene_B_index" ON "_CharacterToScene"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CreatureToScene_AB_unique" ON "_CreatureToScene"("A", "B");

-- CreateIndex
CREATE INDEX "_CreatureToScene_B_index" ON "_CreatureToScene"("B");

-- AddForeignKey
ALTER TABLE "Scene" ADD CONSTRAINT "Scene_adventureId_fkey" FOREIGN KEY ("adventureId") REFERENCES "Adventure"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PointOfInterest" ADD CONSTRAINT "PointOfInterest_sceneId_fkey" FOREIGN KEY ("sceneId") REFERENCES "Scene"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_adventureId_fkey" FOREIGN KEY ("adventureId") REFERENCES "Adventure"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Creature" ADD CONSTRAINT "Creature_adventureId_fkey" FOREIGN KEY ("adventureId") REFERENCES "Adventure"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SceneConnections" ADD CONSTRAINT "_SceneConnections_A_fkey" FOREIGN KEY ("A") REFERENCES "Scene"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SceneConnections" ADD CONSTRAINT "_SceneConnections_B_fkey" FOREIGN KEY ("B") REFERENCES "Scene"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToScene" ADD CONSTRAINT "_CharacterToScene_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToScene" ADD CONSTRAINT "_CharacterToScene_B_fkey" FOREIGN KEY ("B") REFERENCES "Scene"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreatureToScene" ADD CONSTRAINT "_CreatureToScene_A_fkey" FOREIGN KEY ("A") REFERENCES "Creature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreatureToScene" ADD CONSTRAINT "_CreatureToScene_B_fkey" FOREIGN KEY ("B") REFERENCES "Scene"("id") ON DELETE CASCADE ON UPDATE CASCADE;
